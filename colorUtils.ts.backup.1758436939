export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface HSV {
  h: number;
  s: number;
  v: number;
}

export class ColorUtils {
  public static hexToRgb(hex: string): RGB | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  public static rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  public static rgbToHsl(r: number, g: number, b: number): HSL {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  public static hslToRgb(h: number, s: number, l: number): RGB {
    h /= 360;
    s /= 100;
    l /= 100;

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  }

  public static rgbToHsv(r: number, g: number, b: number): HSV {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    let h = 0;
    if (diff !== 0) {
      if (max === r) {
        h = ((g - b) / diff) % 6;
      } else if (max === g) {
        h = (b - r) / diff + 2;
      } else {
        h = (r - g) / diff + 4;
      }
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;

    const s = max === 0 ? 0 : diff / max;
    const v = max;

    return { h, s: s * 100, v: v * 100 };
  }

  public static hsvToRgb(h: number, s: number, v: number): RGB {
    h /= 360;
    s /= 100;
    v /= 100;

    const c = v * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = v - c;

    let r = 0, g = 0, b = 0;

    if (h < 1/6) {
      r = c; g = x; b = 0;
    } else if (h < 2/6) {
      r = x; g = c; b = 0;
    } else if (h < 3/6) {
      r = 0; g = c; b = x;
    } else if (h < 4/6) {
      r = 0; g = x; b = c;
    } else if (h < 5/6) {
      r = x; g = 0; b = c;
    } else {
      r = c; g = 0; b = x;
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  }

  public static getContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    if (!rgb1 || !rgb2) return 0;

    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  }

  public static getContrastColor(backgroundColor: string): string {
    const rgb = this.hexToRgb(backgroundColor);
    if (!rgb) return "#000000";

    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }

  public static lighten(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.l = Math.min(100, hsl.l + amount);
    const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return this.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
  }

  public static darken(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.l = Math.max(0, hsl.l - amount);
    const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return this.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
  }

  public static saturate(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.s = Math.min(100, Math.max(0, hsl.s + amount));
    const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return this.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
  }

  public static desaturate(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.s = Math.min(100, Math.max(0, hsl.s - amount));
    const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return this.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
  }

  public static adjustHue(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.h = (hsl.h + amount) % 360;
    if (hsl.h < 0) hsl.h += 360;
    const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return this.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
  }

  public static mix(color1: string, color2: string, amount: number): string {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    if (!rgb1 || !rgb2) return color1;

    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * amount);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * amount);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * amount);

    return this.rgbToHex(r, g, b);
  }

  public static getComplementary(color: string): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    hsl.h = (hsl.h + 180) % 360;
    const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return this.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
  }

  public static getTriadic(color: string): string[] {
    const rgb = this.hexToRgb(color);
    if (!rgb) return [color, color];

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const h1 = (hsl.h + 120) % 360;
    const h2 = (hsl.h + 240) % 360;

    const rgb1 = this.hslToRgb(h1, hsl.s, hsl.l);
    const rgb2 = this.hslToRgb(h2, hsl.s, hsl.l);

    return [
      this.rgbToHex(rgb1.r, rgb1.g, rgb1.b),
      this.rgbToHex(rgb2.r, rgb2.g, rgb2.b)
    ];
  }

  public static getAnalogous(color: string): string[] {
    const rgb = this.hexToRgb(color);
    if (!rgb) return [color, color];

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const h1 = (hsl.h + 30) % 360;
    const h2 = (hsl.h - 30 + 360) % 360;

    const rgb1 = this.hslToRgb(h1, hsl.s, hsl.l);
    const rgb2 = this.hslToRgb(h2, hsl.s, hsl.l);

    return [
      this.rgbToHex(rgb1.r, rgb1.g, rgb1.b),
      this.rgbToHex(rgb2.r, rgb2.g, rgb2.b)
    ];
  }

  public static getSplitComplementary(color: string): string[] {
    const rgb = this.hexToRgb(color);
    if (!rgb) return [color, color];

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const h1 = (hsl.h + 150) % 360;
    const h2 = (hsl.h + 210) % 360;

    const rgb1 = this.hslToRgb(h1, hsl.s, hsl.l);
    const rgb2 = this.hslToRgb(h2, hsl.s, hsl.l);

    return [
      this.rgbToHex(rgb1.r, rgb1.g, rgb1.b),
      this.rgbToHex(rgb2.r, rgb2.g, rgb2.b)
    ];
  }

  public static getTetradic(color: string): string[] {
    const rgb = this.hexToRgb(color);
    if (!rgb) return [color, color, color];

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const h1 = (hsl.h + 90) % 360;
    const h2 = (hsl.h + 180) % 360;
    const h3 = (hsl.h + 270) % 360;

    const rgb1 = this.hslToRgb(h1, hsl.s, hsl.l);
    const rgb2 = this.hslToRgb(h2, hsl.s, hsl.l);
    const rgb3 = this.hslToRgb(h3, hsl.s, hsl.l);

    return [
      this.rgbToHex(rgb1.r, rgb1.g, rgb1.b),
      this.rgbToHex(rgb2.r, rgb2.g, rgb2.b),
      this.rgbToHex(rgb3.r, rgb3.g, rgb3.b)
    ];
  }

  public static generatePalette(baseColor: string, count: number = 5): string[] {
    const rgb = this.hexToRgb(baseColor);
    if (!rgb) return [baseColor];

    const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const palette: string[] = [baseColor];

    for (let i = 1; i < count; i++) {
      const newHsl = { ...hsl };
      newHsl.h = (hsl.h + (i * 360) / count) % 360;
      const newRgb = this.hslToRgb(newHsl.h, newHsl.s, newHsl.l);
      palette.push(this.rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    }

    return palette;
  }

  public static isLight(color: string): boolean {
    const rgb = this.hexToRgb(color);
    if (!rgb) return false;

    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.5;
  }

  public static isDark(color: string): boolean {
    return !this.isLight(color);
  }

  public static isValidHex(hex: string): boolean {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
  }

  public static normalizeHex(hex: string): string {
    if (!this.isValidHex(hex)) return hex;
    
    if (hex.length === 4) {
      return "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    
    return hex.toUpperCase();
  }
}
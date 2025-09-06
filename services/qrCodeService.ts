export interface QRCodeOptions {
  text: string;
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
  format?: 'svg' | 'png' | 'jpeg' | 'webp';
  logo?: {
    url: string;
    width: number;
    height: number
  }
}

export interface QRCodeResult {
  dataUrl: string;
  options: QRCodeOptions;
  generatedAt: Date;
  size: {
    width: number;
    height: number
  }
}

export interface QRCodeTemplate {
  id: string;
  name: string;
  description: string;
  options: Partial<QRCodeOptions>;
  category: 'business' | 'personal' | 'social' | 'custom'
}

class QRCodeService {
  private readonly DEFAULT_OPTIONS: Partial<QRCodeOptions> = {
    size: 256;
    foregroundColor: '#000000';
    backgroundColor: '#FFFFFF';
    errorCorrectionLevel: 'M';
    margin: 4;
    format: 'svg'
  },

  private readonly ERROR_CORRECTION_LEVELS;
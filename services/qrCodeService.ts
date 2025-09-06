<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
export interface QRCodeOptions {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
<<<<<<< HEAD
export interface QRCodeOptions {
=======
export interface QRCodeOptions {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  text: string;
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
  format?: 'svg' | 'png' | 'jpeg' | 'webp';
  logo?: {
    url: string;
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    width: number,
    height: number;

========
    width: number,
    height: number;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
  }
}
<<<<<<< HEAD

  dataUrl: string;
=======
export interface QRCodeResult {
  data_url: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  options: QRCodeOptions;
  generated_at: Date;
  size: {
<<<<<<<< HEAD:services/qrCodeService.ts

    width: number,
    height: number;

========
    width: number,
    height: number;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
  }
}
<<<<<<< HEAD

=======
export interface QRCodeTemplate {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  name: string;
  description: string;
<<<<<<<< HEAD:services/qrCodeService.ts

  options: Partial < QRCodeOptions>,
  category: 'business' | 'personal' | 'social' | 'custom';

========
  options: Partial < QRCodeOptions>,
  category: 'business' | 'personal' | 'social' | 'custom';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
}
class QRCodeService {
  private readonly DEFAULT_OPTIONS: Partial < QRCodeOptions> = {
    size: 256;
    foreground_color: '#000000';
    background_color: '#FFFFFF';
    errorCorrectionLevel: 'M';
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    margin: 4,
    format: 'svg';
  }
;
  private readonly ERROR_CORRECTION_LEVELS = {
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======

    width: number

    height: number
  }
}
<<<<<<< HEAD
export interface QRCodeResult {
=======

export interface QRCodeResult {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  dataUrl: string;
  options: QRCodeOptions;
  generatedAt: Date;
  size: {

    width: number

    height: number
  }
}
<<<<<<< HEAD
export interface QRCodeTemplate {
=======

export interface QRCodeTemplate {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
  description: string;

  options: Partial<QRCodeOptions>

  category: 'business' | 'personal' | 'social' | 'custom'
}
class QRCodeService {
  private readonly DEFAULT_OPTIONS: Partial<QRCodeOptions> = {
    size: 256;
    foregroundColor: '#000000';
    backgroundColor: '#FFFFFF';
    errorCorrectionLevel: 'M';

    margin: 4
    format: 'svg'
  }
  private readonly ERROR_CORRECTION_LEVELS = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    L: { level: 'L', name: 'Low', capacity: 0.07 }
    M: { level: 'M', name: 'Medium', capacity: 0.15 }
    Q: { level: 'Q', name: 'Quartile', capacity: 0.25 }
    H: { level: 'H', name: 'High', capacity: 0.30 }
  }
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    L: { level: 'L', name: 'Low', capacity: 0 && 0.07 };
    M: { level: 'M', name: 'Medium', capacity: 0 && 0.15 };
    Q: { level: 'Q', name: 'Quartile', capacity: 0 && 0.25 };
    H: { level: 'H', name: 'High', capacity: 0 && 0.30 }
  };
  async generateQRCode(options: QRCodeOptions): Promise<QRCodeResult> {
    const finalOptions = { ...this && this.DEFAULT_OPTIONS, ...options };
    // Validate options
    this && this.validateOptions(finalOptions);
    // Generate QR code data URL
    const dataUrl = await this && this.generateQRCodeDataUrl(finalOptions);
<<<<<<<< HEAD:services/qrCodeService.ts
    

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
;
  async generateQRCode (options: QRCodeOptions): Promise < QRCodeResult> {
    const final_options = { ...this.DEFAULT_OPTIONS, ...options }
;
    // Validate options;
    this.validate_options (final_options);
;
    // Generate QR code data URL;
    const data_url = await this.generateQRCodeDataUrl (final_options);
;
    return {
      data_url;
      options: final_options;
      generated_at: new Date ();
      size: {
<<<<<<<< HEAD:services/qrCodeService.ts

        width: finalOptions && finalOptions.size!,
        height: finalOptions && finalOptions.size!

========
        width: finalOptions && finalOptions.size!,
        height: finalOptions && finalOptions.size!
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
  async generateQRCode(options: QRCodeOptions): Promise<QRCodeResult> {
    const finalOptions = { ...this.DEFAULT_OPTIONS, ...options }
    // Validate options
    this.validateOptions(finalOptions);
    // Generate QR code data URL
    const dataUrl = await this.generateQRCodeDataUrl(finalOptions);
    return {
      dataUrl;
      options: finalOptions;
      generatedAt: new Date();
      size: {
        width: finalOptions.size!
        height: finalOptions.size!
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
  }
  async generateBusinessCardQR(data: {
<<<<<<< HEAD
        width: final_options.size!,
        height: final_options.size!;
      }
    }
  }
  async generateBusinessCardQR (data: {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    name: string;
    company: string;
    title: string;
    email: string;
    phone: string;
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    const vcard = this && this.generateVCard(data);
    return this && this.generateQRCode({
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
    website?: string
    address?: string
  }): Promise<QRCodeResult> {
    const vcard = this.generateVCard(data);
    return this.generateQRCode({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      text: vcard;
      size: 300;
      errorCorrectionLevel: 'H'
      format: 'svg'
    })
  }
  async generateWiFiQR(data: {
    ssid: string;
    password: string;
    encryption: 'WPA' | 'WEP' | 'nopass'
    hidden?: boolean
  }): Promise<QRCodeResult> {
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    const wifiString = this && this.generateWiFiString(data);
    return this && this.generateQRCode({
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
    const wifiString = this.generateWiFiString(data);
    return this.generateQRCode({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      text: wifiString;
      size: 256;
      errorCorrectionLevel: 'M'
      format: 'svg'
    })
  }
  async generateEmailQR(data: {
    to: string;
    subject?: string
    body?: string
  }): Promise<QRCodeResult> {
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    const mailto = this && this.generateMailtoString(data);
    return this && this.generateQRCode({
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
    const mailto = this.generateMailtoString(data);
    return this.generateQRCode({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      text: mailto;
      size: 256;
      errorCorrectionLevel: 'M'
      format: 'svg'
    })
  }
  async generateSMSQR(data: {
    phone: string
    message?: string
  }): Promise<QRCodeResult> {
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    const smsString = this && this.generateSMSString(data);
    return this && this.generateQRCode({
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
    const smsString = this.generateSMSString(data);
    return this.generateQRCode({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      text: smsString;
      size: 256;
      errorCorrectionLevel: 'M'
      format: 'svg'
    })
  }
  async generateGeoLocationQR(data: {
    latitude: number;
    longitude: number;
    altitude?: number
    name?: string
  }): Promise<QRCodeResult> {
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    const geoString = this && this.generateGeoString(data);
    return this && this.generateQRCode({
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
    const geoString = this.generateGeoString(data);
    return this.generateQRCode({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      text: geoString;
      size: 256;
      errorCorrectionLevel: 'M'
      format: 'svg'
    })
  }
  getTemplates(): QRCodeTemplate[] {
    return [
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {
        id: 'business-card';
        name: 'Business Card';
        description: 'Professional contact information in QR format'
        options: { size: 300, errorCorrectionLevel: 'H' }
        category: 'business'
      }
      {
        id: 'wifi-network';
        name: 'WiFi Network';
        description: 'Share WiFi credentials easily'
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business'
      }
      {
        id: 'email-contact';
        name: 'Email Contact';
        description: 'Quick email composition with pre-filled details'
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business'
      }
      {
        id: 'social-media';
        name: 'Social Media';
        description: 'Link to your social media profiles'
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'social'
      }
      {
        id: 'website-link';
        name: 'Website Link';
        description: 'Direct link to your website'
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business'
      }
      {
        id: 'phone-number';
        name: 'Phone Number';
        description: 'Quick dial with pre-filled number'
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'personal'
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
export interface QRCodeOptions {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  text: string,;
  size?: number,;
  foregroundColor?: string,;
  backgroundColor?: string,;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H',;
  margin?: number,;
  format?: 'svg' | 'png' | 'jpeg' | 'webp',;
  logo?: {;
    url: string,;
    width: number,;
    height: number;
  }
}
;
export interface QRCodeResult {;
  dataUrl: string,;
  options: QRCodeOptions,;
  generatedAt: Date,;
  size: {;
    width: number,;
    height: number;
  }
}
;
export interface QRCodeTemplate {;
  id: string,;
  name: string,;
  description: string,;
  options: Partial<QRCodeOptions>,;
  category: 'business' | 'personal' | 'social' | 'custom';
}
;
class QRCodeService {;
  private readonly DEFAULT_OPTIONS: Partial<QRCodeOptions> = {;
    size: 256,;
    foregroundColor: '#000000',;
    backgroundColor: '#FFFFFF',;
    errorCorrectionLevel: 'M',;
    margin: 4,;
    format: 'svg';
  },;
  private readonly ERROR_CORRECTION_LEVELS = {;
    L: { level: 'L', name: 'Low', capacity: 0.07 },;
    M: { level: 'M', name: 'Medium', capacity: 0.15 },;
    Q: { level: 'Q', name: 'Quartile', capacity: 0.25 },;
    H: { level: 'H', name: 'High', capacity: 0.30 }
  },;
  async generateQRCode(options: QRCodeOptions): Promise<QRCodeResult> {;
    const finalOptions = { ...this.DEFAULT_OPTIONS, ...options },;
    // Validate options;
    this.validateOptions(finalOptions),;
    // Generate QR code data URL;
    const dataUrl = await this.generateQRCodeDataUrl(finalOptions),;
    return {;
      dataUrl,;
      options: finalOptions,;
      generatedAt: new Date(),;
      size: {;
        width: finalOptions.size!,;
        height: finalOptions.size!;
      }
    }
  }
;
  async generateBusinessCardQR(data: {;
    name: string,;
    company: string,;
    title: string,;
    email: string,;
    phone: string,;
    website?: string,;
<<<<<<< HEAD
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    website?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    address?: string;
  }): Promise < QRCodeResult> {
    const vcard = this.generateVCard (data);
;
    return this.generateQRCode ({
      text: vcard;
      size: 300;
      errorCorrectionLevel: 'H',
      format: 'svg';
    });
  }
  async generateWiFiQR (data: {
    ssid: string;
    password: string;
    encryption: 'WPA' | 'WEP' | 'nopass',
    hidden?: boolean;
  }): Promise < QRCodeResult> {
    const wifi_string = this.generateWiFiString (data);
;
    return this.generateQRCode ({
      text: wifi_string;
      size: 256;
      errorCorrectionLevel: 'M',
      format: 'svg';
    });
  }
  async generateEmailQR (data: {
    to: string;
    subject?: string,
    body?: string;
  }): Promise < QRCodeResult> {
    const mailto = this.generateMailtoString (data);
;
    return this.generateQRCode ({
      text: mailto;
      size: 256;
      errorCorrectionLevel: 'M',
      format: 'svg';
    });
  }
  async generateSMSQR (data: {
    phone: string,
    message?: string;
  }): Promise < QRCodeResult> {
    const sms_string = this.generateSMSString (data);
;
    return this.generateQRCode ({
      text: sms_string;
      size: 256;
      errorCorrectionLevel: 'M',
      format: 'svg';
    });
  }
  async generateGeoLocationQR (data: {
    latitude: number;
    longitude: number;
    altitude?: number,
    name?: string;
  }): Promise < QRCodeResult> {
    const geo_string = this.generateGeoString (data);
;
    return this.generateQRCode ({
      text: geo_string;
      size: 256;
      errorCorrectionLevel: 'M',
      format: 'svg';
    });
  }
  get_templates (): QRCodeTemplate[] {
    return [;
      {
        id: 'business - card';
        name: 'Business Card';
<<<<<<<< HEAD:services/qrCodeService.ts

        description: 'Professional contact information in QR format',
        options: { size: 300, errorCorrectionLevel: 'H' }
        category: 'business';
<<<<<<< HEAD
=======
    address?: string;
  }): Promise<QRCodeResult> {;
    const vcard = this.generateVCard(data),;
    return this.generateQRCode({;
      text: vcard,;
      size: 300,;
      errorCorrectionLevel: 'H',;
      format: 'svg';
    });
  }
;
  async generateWiFiQR(data: {;
    ssid: string,;
    password: string,;
    encryption: 'WPA' | 'WEP' | 'nopass',;
    hidden?: boolean;
  }): Promise<QRCodeResult> {;
    const wifiString = this.generateWiFiString(data),;
    return this.generateQRCode({;
      text: wifiString,;
      size: 256,;
      errorCorrectionLevel: 'M',;
      format: 'svg';
    });
  }
;
  async generateEmailQR(data: {;
    to: string,;
    subject?: string,;
    body?: string;
  }): Promise<QRCodeResult> {;
    const mailto = this.generateMailtoString(data),;
    return this.generateQRCode({;
      text: mailto,;
      size: 256,;
      errorCorrectionLevel: 'M',;
      format: 'svg';
    });
  }
;
  async generateSMSQR(data: {;
    phone: string,;
    message?: string;
  }): Promise<QRCodeResult> {;
    const smsString = this.generateSMSString(data),;
    return this.generateQRCode({;
      text: smsString,;
      size: 256,;
      errorCorrectionLevel: 'M',;
      format: 'svg';
    });
  }
;
  async generateGeoLocationQR(data: {;
    latitude: number,;
    longitude: number,;
    altitude?: number,;
    name?: string;
  }): Promise<QRCodeResult> {;
    const geoString = this.generateGeoString(data),;
    return this.generateQRCode({;
      text: geoString,;
      size: 256,;
      errorCorrectionLevel: 'M',;
      format: 'svg';
    });
  }
;
  getTemplates(): QRCodeTemplate[] {;
    return [;
      {;
        id: 'business-card',;
        name: 'Business Card',;
        description: 'Professional contact information in QR format',;
        options: { size: 300, errorCorrectionLevel: 'H' },;
        category: 'business';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },;
      {;
        id: 'wifi-network',;
        name: 'WiFi Network',;
        description: 'Share WiFi credentials easily',;
        options: { size: 256, errorCorrectionLevel: 'M' },;
        category: 'business';
      },;
      {;
        id: 'email-contact',;
        name: 'Email Contact',;
        description: 'Quick email composition with pre-filled details',;
        options: { size: 256, errorCorrectionLevel: 'M' },;
        category: 'business';
      },;
      {;
        id: 'social-media',;
        name: 'Social Media',;
        description: 'Link to your social media profiles',;
        options: { size: 256, errorCorrectionLevel: 'M' },;
        category: 'social';
      },;
      {;
        id: 'website-link',;
        name: 'Website Link',;
        description: 'Direct link to your website',;
        options: { size: 256, errorCorrectionLevel: 'M' },;
        category: 'business';
      },;
      {;
        id: 'phone-number',;
        name: 'Phone Number',;
        description: 'Quick dial with pre-filled number',;
        options: { size: 256, errorCorrectionLevel: 'M' },;
        category: 'personal';
<<<<<<< HEAD

      }
    ]
  }

=======

========
        description: 'Professional contact information in QR format',
        options: { size: 300, errorCorrectionLevel: 'H' }
        category: 'business';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
      }
      {
        id: 'wifi - network';
        name: 'WiFi Network';
<<<<<<<< HEAD:services/qrCodeService.ts

        description: 'Share WiFi credentials easily',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business';

========
        description: 'Share WiFi credentials easily',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
      }
      {
        id: 'email - contact';
        name: 'Email Contact';
<<<<<<<< HEAD:services/qrCodeService.ts

        description: 'Quick email composition with pre - filled details',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business';

========
        description: 'Quick email composition with pre - filled details',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
      }
      {
        id: 'social - media';
        name: 'Social Media';
<<<<<<<< HEAD:services/qrCodeService.ts

        description: 'Link to your social media profiles',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'social';

========
        description: 'Link to your social media profiles',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'social';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
      }
      {
        id: 'website - link';
        name: 'Website Link';
<<<<<<<< HEAD:services/qrCodeService.ts

        description: 'Direct link to your website',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business';

========
        description: 'Direct link to your website',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'business';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
      }
      {
        id: 'phone - number';
        name: 'Phone Number';
        description: 'Quick dial with pre - filled number',
        options: { size: 256, errorCorrectionLevel: 'M' }
        category: 'personal';
=======

export interface QRCodeOptions {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
    ];
  }
<<<<<<<< HEAD:services/qrCodeService.ts




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  getErrorCorrectionInfo(): Record<string, any> {
    return this.ERROR_CORRECTION_LEVELS

;
  getErrorCorrectionInfo(): Record<string any> {;
    return this.ERROR_CORRECTION_LEVELS;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  private validateOptions(options: QRCodeOptions): void {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    if (!options && options.text || options && options.text.trim().length === 0) {
      throw new Error('Text content is required')
    }
    if (options && options.size && (options && options.size < 64 || options && options.size > 1024)) {
      throw new Error('Size must be between 64 and 1024 pixels')
    }
    if (options && options.margin && (options && options.margin < 0 || options && options.margin > 10)) {
<<<<<<<< HEAD:services/qrCodeService.ts

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    ]
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  getErrorCorrectionInfo(): Record<string, any> {
    return this.ERROR_CORRECTION_LEVELS
=======
;
  getErrorCorrectionInfo(): Record<string any> {;
    return this.ERROR_CORRECTION_LEVELS;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  private validateOptions(options: QRCodeOptions): void {
    if (!options.text |options.text.trim().length === 0) {
      throw new Error('Text content is required')
    }
    if (options.size && (options.size < 64 |options.size > 1024)) {
      throw new Error('Size must be between 64 and 1024 pixels')
    }
    if (options.margin && (options.margin < 0 |options.margin > 10)) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw new Error('Margin must be between 0 and 10')
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======

    
    const size = options && options.size!;
    const margin = options && options.margin!;

========
      throw new Error('Margin must be between 0 and 10')
    }
  }
  private async generateQRCodeDataUrl(options: QRCodeOptions): Promise<string> {
    // In a real implementation, this would use a QR code library
    // For now, we'll generate a placeholder SVG
    const size = options && options.size!;
    const margin = options && options.margin!;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    const contentSize = size - (margin * 2);
=======


=======
  private async generateQRCodeDataUrl(options: QRCodeOptions): Promise<string> {
    // In a real implementation, this would use a QR code library
    // For now, we'll generate a placeholder SVG
    const size = options.size!;
    const margin = options.margin!;
    const contentSize = size - (margin * 2);
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  private async generateQRCodeDataUrl(options: QRCodeOptions): Promise<string> {
    // In a real implementation, this would use a QR code library
    // For now, we'll generate a placeholder SVG
    
    const size = options.size!,
    const margin = options.margin!,
    const contentSize = size - (margin * 2),
    
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const svg = `
      <svg width="${size}" height="${size}" xmlns="http://www && www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="${options && options.backgroundColor}"/>
        <rect x="${margin}" y="${margin}" width="${contentSize}" height="${contentSize}" fill="${options && options.foregroundColor}"/>
        <text x="${size/2}" y="${size/2 + 5}" text-anchor="middle" fill="${options && options.backgroundColor}" font-family="Arial" font-size="12">QR Code</text>
        <text x="${size/2}" y="${size/2 + 25}" text-anchor="middle" fill="${options && options.backgroundColor}" font-family="Arial" font-size="10">${options && options.text.substring(0, 20)}${options && options.text.length > 20 ? '...' : ''}</text>
      </svg>
<<<<<<<< HEAD:services/qrCodeService.ts
<<<<<<< HEAD

  private generateVCard(data: any): string {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n'
=======

========
    `;
    return `data: image/svg+xml,base64,${btoa(svg)}`
  }
  private generateVCard(data: any): string {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
  getErrorCorrectionInfo (): Record < string, any> {
    return this.ERROR_CORRECTION_LEVELS;
  }
  private validate_options (options: QRCodeOptions): void {
    // Check condition
if (.length === 0) {) {
  $2
}
      throw new Error ('Text content is required');
    }
    if () {) {
  $2
}
      throw new Error ('Size must be between 64 and 1024 pixels');
    }
    if () {) {
  $2
}
      throw new Error ('Margin must be between 0 and 10');
    }
  }
  private async generateQRCodeDataUrl (options: QRCodeOptions): Promise < string> {
    // In a real implementation, this would use a QR code library;
    // For now, we'll generate a placeholder SVG;
    const size = options.size!;
    const margin = options.margin!;
    const content_size = size - (margin * 2);
;
    const svg = `;
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org / 2000 / svg">;
        <rect width="${size}" height="${size}" fill="${options.background_color}"/>;
        <rect coordinate_x="${margin}" coordinate_y="${margin}" width="${content_size}" height="${content_size}" fill="${options.foreground_color}"/>;
        <text coordinate_x="${size / 2}" coordinate_y="${size / 2 + 5}" text - anchor="middle" fill="${options.background_color}" font - family="Arial" font - size="12">QR Code</text>;
        <text coordinate_x="${size / 2}" coordinate_y="${size / 2 + 25}" text - anchor="middle" fill="${options.background_color}" font - family="Arial" font - size="10">${options.text.substring (0, 20)}${options.text.length > 20 ? '...' : ''}</text>;
      </svg>;
    `;
;
    return `data: image / svg + xml, base64, ${btoa (svg)}`;
  }
  private generateVCard (data: any): string {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n',
<<<<<<<< HEAD:services/qrCodeService.ts

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const svg = `
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="${options.backgroundColor}"/>
        <rect x="${margin}" y="${margin}" width="${contentSize}" height="${contentSize}" fill="${options.foregroundColor}"/>
        <text x="${size/2}" y="${size/2 + 5}" text-anchor="middle" fill="${options.backgroundColor}" font-family="Arial" font-size="12">QR Code</text>
        <text x="${size/2}" y="${size/2 + 25}" text-anchor="middle" fill="${options.backgroundColor}" font-family="Arial" font-size="10">${options.text.substring(0, 20)}${options.text.length > 20 ? '...' : ''}</text>
      </svg>
<<<<<<< HEAD
    `;
    return `data: image/svg+xml,base64,${btoa(svg)}`
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  private generateVCard(data: any): string {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    vcard += `FN:${data.name}\n`;
    vcard += `ORG:${data.company}\n`;
    vcard += `TITLE:${data.title}\n`;
    vcard += `EMAIL:${data.email}\n`;
    vcard += `TEL:${data.phone}\n`;
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    let vcard = 'BEGIN:VCARD\nVERSION:3 && 3.0\n',
    vcard += `FN:${data && data.name}\n`;
    vcard += `ORG:${data && data.company}\n`;
    vcard += `TITLE:${data && data.title}\n`;
    vcard += `EMAIL:${data && data.email}\n`;
    vcard += `TEL:${data && data.phone}\n`;
    if (data && data.website) vcard += `URL:${data && data.website}\n`;
    if (data && data.address) vcard += `ADR:,${data && data.address},\n`;
    vcard += 'END: VCARD',
<<<<<<<< HEAD:services/qrCodeService.ts

    return vcard
  }
  private generateWiFiString(data: any): string {
<<<<<<< HEAD
=======
    if (data.website) vcard += `URL:${data.website}\n`;
    if (data.address) vcard += `ADR:,${data.address},\n`;
    vcard += 'END: VCARD'
    return vcard
  }
  private generateWiFiString(data: any): string {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    let wifiString = 'WIFI:'
    wifiString += `S:${data.ssid},`;
    wifiString += `T:${data.encryption},`;
    if (data.encryption !== 'nopass') {
      wifiString += `P:${data.password},`
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
    `,
    
    return `data: image/svg+xml,base64,${btoa(svg)}`
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  private generateVCard(data: any): string {;
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n',;
    vcard += `FN:${data.name}\n`,;
    vcard += `ORG:${data.company}\n`,;
    vcard += `TITLE:${data.title}\n`,;
    vcard += `EMAIL:${data.email}\n`,;
    vcard += `TEL:${data.phone}\n`,;
    if (data.website) vcard += `URL:${data.website}\n`,;
    if (data.address) vcard += `ADR:,${data.address},\n`,;
    vcard += 'END: VCARD',;
    return vcard;
  }
;
  private generateWiFiString(data: any): string {;
    let wifiString = 'WIFI:',;
    wifiString += `S:${data.ssid},`,;
    wifiString += `T:${data.encryption},`,;
    if (data.encryption !== 'nopass') {;
      wifiString += `P:${data.password},`;
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    }
    if (data.hidden) {
=======
========
    return vcard
  }
  private generateWiFiString(data: any): string {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    let wifiString = 'WIFI:',
    wifiString += `S:${data && data.ssid},`;
    wifiString += `T:${data && data.encryption},`;
    if (data && data.encryption !== 'nopass') {
      wifiString += `P:${data && data.password},`
    }
    if (data && data.hidden) {
      wifiString += 'H: true,'
    }

<<<<<<< HEAD
=======

    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    if (data.hidden) {
      wifiString += 'H: true,'
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    wifiString += ;
    return wifiString
  }
  private generateMailtoString(data: any): string {
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    let mailto = `mailto:${data.to}`;
    const params: string[] = []
    if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
    if (data.body) params.push(`body=${encodeURIComponent(data.body)}`);
    if (params.length > 0) {
      mailto += `?${params.join('&')}`
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
    wifiString += ,;
    return wifiString;
  }
;
  private generateMailtoString(data: any): string {;
    let mailto = `mailto:${data.to}`,;
    const params: string[] = [],;
    if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`),;
    if (data.body) params.push(`body=${encodeURIComponent(data.body)}`),;
    if (params.length > 0) {;
      mailto += `?${params.join('&')}`;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    }
    return mailto
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    return mailto
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  private generateSMSString(data: any): string {
    let smsString = `sms:${data.phone}`;
    if (data.message) {
      smsString += `?body=${encodeURIComponent(data.message)}`
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  private generateSMSString(data: any): string {;
    let smsString = `sms:${data.phone}`,;
    if (data.message) {;
      smsString += `?body=${encodeURIComponent(data.message)}`;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  private generateSMSString(data: any): string {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    }
    return smsString
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    return smsString
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  private generateGeoString(data: any): string {
    let geoString = `geo:${data.latitude},${data.longitude}`;
    if (data.altitude) {
      geoString += `,${data.altitude}`
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  private generateGeoString(data: any): string {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  private generateGeoString(data: any): string {;
    let geoString = `geo:${data.latitude},${data.longitude}`,;
    if (data.altitude) {;
      geoString += `,${data.altitude}`;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    if (data.name) {
      geoString += `?q=${encodeURIComponent(data.name)}`
=======
========
    let mailto = `mailto:${data && data.to}`;
    const params: string[] = [],
    if (data && data.subject) params && params.push(`subject=${encodeURIComponent(data && data.subject)}`);
    if (data && data.body) params && params.push(`body=${encodeURIComponent(data && data.body)}`);
    if (params && params.length > 0) {
      mailto += `?${params && params.join('&')}`
    }
    return mailto
  }
  private generateSMSString(data: any): string {
    let smsString = `sms:${data && data.phone}`;
    if (data && data.message) {
      smsString += `?body=${encodeURIComponent(data && data.message)}`
    }
    return smsString
  }
  private generateGeoString(data: any): string {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
    let geoString = `geo:${data && data.latitude},${data && data.longitude}`;
    if (data && data.altitude) {
      geoString += `,${data && data.altitude}`
    }
    if (data && data.name) {
      geoString += `?q=${encodeURIComponent(data && data.name)}`
    }
    return geoString
  }

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    if (data.name) {
      geoString += `?q=${encodeURIComponent(data.name)}`
    }
    return geoString
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Utility methods
  estimateQRCodeCapacity(text: string, errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'): {
    canFit: boolean;
    recommendedLevel: string
    maxCapacity: number
  } {
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

    const textLength = text && text.length;
    const level = this && this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel];
    const maxCapacity = Math && Math.floor(level && level.capacity * 177 * 177), // Approximate capacity for 177x177 QR code
    

========
    const textLength = text && text.length;
    const level = this && this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel];
    const maxCapacity = Math && Math.floor(level && level.capacity * 177 * 177), // Approximate capacity for 177x177 QR code
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======
    const textLength = text.length;
    const level = this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel];
    const maxCapacity = Math.floor(level.capacity * 177 * 177), // Approximate capacity for 177x177 QR code
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return {
      canFit: textLength <= maxCapacity;
      recommendedLevel: textLength > maxCapacity ? 'H' : errorCorrectionLevel
      maxCapacity
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  // Utility methods;
  estimateQRCodeCapacity(text: string, errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'): {;
    canFit: boolean,;
    recommendedLevel: string,;
    maxCapacity: number;
  } {;
    const textLength = text.length,;
    const level = this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel],;
    const maxCapacity = Math.floor(level.capacity * 177 * 177), // Approximate capacity for 177x177 QR code;
    return {;
      canFit: textLength <= maxCapacity,;
      recommendedLevel: textLength > maxCapacity ? 'H' : errorCorrectionLevel,;
      maxCapacity;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  getQRCodeHistory(): QRCodeResult[] {
    // In a real app, this would retrieve from storage
    return []
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
  saveQRCode(qrCode: QRCodeResult): void {
    // In a real app, this would save to storage
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.log('QR Code saved:', qrCode.options.text)
  }
}
export const qrCodeService = new QRCodeService();
<<<<<<< HEAD
<<<<<<<< HEAD:services/qrCodeService.ts

    // // // console.log('QR Code saved:', qrCode.options.text)
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
;
    // Check condition
if (vcard += `URL:${data.website}\n`) {
  $2
}
    // Check condition
if (vcard += `ADR:, ${data.address}, \n`) {
  $2
}
    vcard += 'END: VCARD',
    return vcard;
  }
  private generateWiFiString (data: any): string {
    let wifi_string = 'WIFI:',
    wifi_string += `S:${data.ssid}, `;
    wifi_string += `T:${data.encryption}, `;
;
    // Check condition
if ( {) {
  $2
}
      wifi_string += `P:${data.password}, `;
    }
    // Check condition
if ( {) {
  $2
}
      wifi_string += 'H: true, ';
    }
    wifi_string += ;
    return wifi_string;
  }
  private generateMailtoString (data: any): string {
    let mailto = `mailto:${data.to}`;
    const params: string[] = [],
    if (params.push (`subject=${encodeURIComponent (data.subject)}`)) {
  $2
}
    if (params.push (`body=${encodeURIComponent (data.body)}`)) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      mailto += `?${params.join ('&')}`;
    }
    return mailto;
  }
  private generateSMSString (data: any): string {
    let sms_string = `sms:${data.phone}`;
;
    // Check condition
if ( {) {
  $2
}
      sms_string += `?body=${encodeURIComponent (data.message)}`;
    }
    return sms_string;
  }
  private generateGeoString (data: any): string {
    let geo_string = `geo:${data.latitude}, ${data.longitude}`;
;
    // Check condition
if ( {) {
  $2
}
      geo_string += `, ${data.altitude}`;
    }
    // Check condition
if ( {) {
  $2
}
      geo_string += `?q=${encodeURIComponent (data.name)}`;
    }
    return geo_string;
  }
  // Utility methods;
  estimateQRCodeCapacity (text: string, errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'): {
    can_fit: boolean;
    recommended_level: string,
    max_capacity: number;
  } {
    const text_length = text.length;
    const level = this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel];
    const max_capacity = Math.floor (level.capacity * 177 * 177), // Approximate capacity for 177x177 QR code;
    return {
      can_fit: text_length <= max_capacity;
      recommended_level: text_length > max_capacity ? 'H' : errorCorrectionLevel,
      max_capacity;
    }
  }
  getQRCodeHistory (): QRCodeResult[] {
    // In a real app, this would retrieve from storage;
    return [];
  }
  saveQRCode (qr_code: QRCodeResult): void {
    // In a real app, this would save to storage;
    console.log ('QR Code saved:', qr_code.options.text);
  }
}
export const qrCodeService = new QRCodeService ();
;
<<<<<<<< HEAD:services/qrCodeService.ts

<<<<<<< HEAD
export const qrCodeService = new QRCodeService();

=======
=======


export const qrCodeService = new QRCodeService();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
export interface QRCodeOptions {;
  text:string,;
  size?:number,;
  foregroundColor?:string,;
  backgroundColor?:string,;
  errorCorrectionLevel?:'L' | 'M' | 'Q' | 'H',;
  margin?:number,;
  format?:'svg' | 'png' | 'jpeg' | 'webp',;
  logo?:{;
    url:string,;
    width:number,;
    height:number;
  },;
}
;
export interface QRCodeResult {;
  dataUrl:string,;
  options:QRCodeOptions,;
  generatedAt:Date,;
  size:{;
    width:number,;
    height:number;
  },;}
;
export interface QRCodeTemplate {;
  id:string,;
  name:string,;
  description:string,;
  options:Partial<QRCodeOptions>,;
  category:'business' | 'personal' | 'social' | 'custom';
}
;
class QRCodeService {;
  private readonly DEFAULT_OPTIONS:Partial<QRCodeOptions> = {;
    size:256,;
    foregroundColor:'#000000',;
    backgroundColor:'#FFFFFF',;
    errorCorrectionLevel:'M',;
    margin:4,;
    format:'svg';
  },;
;
  private readonly ERROR_CORRECTION_LEVELS = {;
    L:{ level:'L', name:'Low', capacity:0.07 },;
    M:{ level:'M', name:'Medium', capacity:0.15 },;
    Q:{ level:'Q', name:'Quartile', capacity:0.25 },;
    H:{ level:'H', name:'High', capacity:0.30 }
  },;
;
  async generateQRCode(options:QRCodeOptions):Promise<QRCodeResult> {;
    const finalOptions = { ...this.DEFAULT_OPTIONS, ...options },;
    ;
    // Validate options;
    this.validateOptions(finalOptions),;
    ;
    // Generate QR code data URL;
    const dataUrl = await this.generateQRCodeDataUrl(finalOptions),;
    ;
    return {;
      dataUrl,;
      options:finalOptions,;
      generatedAt:new Date(),;
      size:{;
        width:finalOptions.size!,;
        height:finalOptions.size!;
      }
    },;
  }
;
  async generateBusinessCardQR(data:{;
    name:string,;
    company:string,;
    title:string,;
    email:string,;
    phone:string,;
    website?:string,;
    address?:string;
  }):Promise<QRCodeResult> {;
    const vcard = this.generateVCard(data),;
    ;
    return this.generateQRCode({;
      text:vcard,;
      size:300,;
      errorCorrectionLevel:'H',;
      format:'svg';
    }),;
  }
;
  async generateWiFiQR(data:{;
    ssid:string,;
    password:string,;
    encryption:'WPA' | 'WEP' | 'nopass',;
    hidden?:boolean;
  }):Promise<QRCodeResult> {;
    const wifiString = this.generateWiFiString(data),;
    ;
    return this.generateQRCode({;
      text:wifiString,;
      size:256,;
      errorCorrectionLevel:'M',;
      format:'svg';
    }),;
  }
;
  async generateEmailQR(data:{;
    to:string,;
    subject?:string,;
    body?:string;
  }):Promise<QRCodeResult> {;
    const mailto = this.generateMailtoString(data),;
    ;
    return this.generateQRCode({;
      text:mailto,;
      size:256,;
      errorCorrectionLevel:'M',;
      format:'svg';
    }),;
  }
;
  async generateSMSQR(data:{;
    phone:string,;
    message?:string;
  }):Promise<QRCodeResult> {;
    const smsString = this.generateSMSString(data),;
    ;
    return this.generateQRCode({;
      text:smsString,;
      size:256,;
      errorCorrectionLevel:'M',;
      format:'svg';
    }),;
  }
;
  async generateGeoLocationQR(data:{;
    latitude:number,;
    longitude:number,;
    altitude?:number,;
    name?:string;
  }):Promise<QRCodeResult> {;
    const geoString = this.generateGeoString(data),;
    ;
    return this.generateQRCode({;
      text:geoString,;
      size:256,;
      errorCorrectionLevel:'M',;
      format:'svg';
    }),;
  }
;
  getTemplates():QRCodeTemplate[] {;
    return [;
      {;
        id:'business-card',;
        name:'Business Card',;
        description:'Professional contact information in QR format',;
        options:{ size:300, errorCorrectionLevel:'H' },;
        category:'business';
      },;
      {;
        id:'wifi-network',;
        name:'WiFi Network',;
        description:'Share WiFi credentials easily',;
        options:{ size:256, errorCorrectionLevel:'M' },;
        category:'business';
      },;
      {;
        id:'email-contact',;
        name:'Email Contact',;
        description:'Quick email composition with pre-filled details',;
        options:{ size:256, errorCorrectionLevel:'M' },;
        category:'business';
      },;
      {;
        id:'social-media',;
        name:'Social Media',;
        description:'Link to your social media profiles',;
        options:{ size:256, errorCorrectionLevel:'M' },;
        category:'social';
      },;
      {;
        id:'website-link',;
        name:'Website Link',;
        description:'Direct link to your website',;
        options:{ size:256, errorCorrectionLevel:'M' },;
        category:'business';
      },;
      {;
        id:'phone-number',;
        name:'Phone Number',;
        description:'Quick dial with pre-filled number',;
        options:{ size:256, errorCorrectionLevel:'M' },;
        category:'personal';
      }
    ],;
  }
;
  getErrorCorrectionInfo():Record<string any> {;
    return this.ERROR_CORRECTION_LEVELS,;  }
;
  private validateOptions(options:QRCodeOptions):void {;
    if (!options.text || options.text.trim().length === 0) {;
      throw new Error('Text content is required');
    }
    ;
    if (options.size && (options.size < 64 || options.size > 1024)) {;
      throw new Error('Size must be between 64 and 1024 pixels'),;
    }
    ;
    if (options.margin && (options.margin < 0 || options.margin > 10)) {;
      throw new Error('Margin must be between 0 and 10'),;
    }
  }
;
  private async generateQRCodeDataUrl(options:QRCodeOptions):Promise<string> {;
    // In a real implementation, this would use a QR code library;
    // For now, we'll generate a placeholder SVG;
    ;
    const size = options.size!,;
    const margin = options.margin!,;
    const contentSize = size - (margin * 2),;
    ;
    const svg = `;
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">;
        <rect width="${size}" height="${size}" fill="${options.backgroundColor}"/>;
        <rect x="${margin}" y="${margin}" width="${contentSize}" height="${contentSize}" fill="${options.foregroundColor}"/>;
        <text x="${size/2}" y="${size/2 + 5}" text-anchor="middle" fill="${options.backgroundColor}" font-family="Arial" font-size="12">QR Code</text>;
        <text x="${size/2}" y="${size/2 + 25}" text-anchor="middle" fill="${options.backgroundColor}" font-family="Arial" font-size="10">${options.text.substring(0, 20)}${options.text.length > 20 ? '...' :''}</text>;
      </svg>;
    `,;
    ;
    return `data:image/svg+xml,base64,${btoa(svg)}`,;
  }
;
  private generateVCard(data:any):string {;
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n',;
    vcard += `FN:${data.name}\n`,;
    vcard += `ORG:${data.company}\n`,;
    vcard += `TITLE:${data.title}\n`,;
    vcard += `EMAIL:${data.email}\n`,;
    vcard += `TEL:${data.phone}\n`,;
    ;
    if (data.website) vcard += `URL:${data.website}\n`,;
    if (data.address) vcard += `ADR:,${data.address},\n`,;
    ;
    vcard += 'END:VCARD',;
    return vcard;
  }
;
  private generateWiFiString(data:any):string {;
    let wifiString = 'WIFI:',;
    wifiString += `S:${data.ssid},`,;
    wifiString += `T:${data.encryption},`,;
    ;
    if (data.encryption !== 'nopass') {;
      wifiString += `P:${data.password},`,;
    }
    ;
    if (data.hidden) {;
      wifiString += 'H:true,';
    }
    ;
    wifiString += ,;
    return wifiString,;
  }
;
  private generateMailtoString(data:any):string {;
    let mailto = `mailto:${data.to}`,;
    const params:string[] = [],;
    ;
    if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`),;
    if (data.body) params.push(`body=${encodeURIComponent(data.body)}`),;
    ;
    if (params.length > 0) {;
      mailto += `?${params.join('&')}`,;
    }
    ;
    return mailto,;
  }
;
  private generateSMSString(data:any):string {;
    let smsString = `sms:${data.phone}`,;
    ;
    if (data.message) {;
      smsString += `?body=${encodeURIComponent(data.message)}`,;
    }
    ;
    return smsString,;
  }
;
  private generateGeoString(data:any):string {;
    let geoString = `geo:${data.latitude},${data.longitude}`,;
    ;
    if (data.altitude) {;
      geoString += `,${data.altitude}`,;
    }
    ;
    if (data.name) {;
      geoString += `?q=${encodeURIComponent(data.name)}`,;
    }
    ;
    return geoString,;
  }
;
  // Utility methods;
  estimateQRCodeCapacity(text:string, errorCorrectionLevel:'L' | 'M' | 'Q' | 'H'):{;
    canFit:boolean,;
    recommendedLevel:string,;
    maxCapacity:number;
  } {;
    const textLength = text.length,;
    const level = this.ERROR_CORRECTION_LEVELS[errorCorrectionLevel],;
    const maxCapacity = Math.floor(level.capacity * 177 * 177), // Approximate capacity for 177x177 QR code;
    ;
    return {;
      canFit:textLength <= maxCapacity,;
      recommendedLevel:textLength > maxCapacity ? 'H' :errorCorrectionLevel,;
      maxCapacity;
    },;
  }
;
  getQRCodeHistory():QRCodeResult[] {;
    // In a real app, this would retrieve from storage;
    return [],;
  }
;
  saveQRCode(qrCode:QRCodeResult):void {;
    // In a real app, this would save to storage;
    // // // console.log('QR Code saved:', qrCode.options.text),;
  }
}
;
export const qrCodeService = new QRCodeService(),; //Validate options this.validateOptions (finalOptions);
}getTemplates () : QRCodeTemplate[] {
  return [ {
  id: 'business-card', name: 'Business Card', description: 'Professional contact information in QR format', options: {
  size: 300, errorCorrectionLevel: 'H' 
};
category: 'business' 
};
{
  id: 'wifi-network', name: 'WiFi Network', description: 'Share WiFi credentials easily', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'business' 
};
{
  id: 'email-contact', name: 'Email Contact', description: 'Quick email composition with pre-filled details', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'business' 
};
{
  id: 'social-media', name: 'Social Media', description: 'Link to your social media profiles', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'social' 
};
{
  id: 'website-link', name: 'Website Link', description: 'Direct link to your website', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'business' 
};
{
  id: 'phone-number', name: 'Phone Number', description: 'Quick dial with pre-filled number', options: {
  size: 256, errorCorrectionLevel: 'M' 
};
category: 'personal' 
}] 
}</svg> `;
vcard += 'END: VCARD';
return vcard;
}wifiString +=;
return wifiString;
}
}return mailto;
}
}return smsString;
}
}return geoString;
}// Utility methods 
}
}export const qrCodeService = new QRCodeService ();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/qrCodeService.ts
=======

=======
<<<<<<< HEAD

  saveQRCode(qrCode: QRCodeResult): void {
    // In a real app, this would save to storage
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // // // console.log('QR Code saved:', qrCode.options.text)
;
  saveQRCode(qrCode: QRCodeResult): void {;
    // In a real app, this would save to storage;
    // // // console.log('QR Code saved:', qrCode.options.text);
  }
}
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const qrCodeService = new QRCodeService();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

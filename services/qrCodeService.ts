
    }
    let vcard = 'BEGIN:VCARD\nVERSION:3 && 3.0\n',
    vcard += `FN:${data && data.name}\n`;
    vcard += `ORG:${data && data.company}\n`;
    vcard += `TITLE:${data && data.title}\n`;
    vcard += `EMAIL:${data && data.email}\n`;
    vcard += `TEL:${data && data.phone}\n`;if (data && data.website) vcard += `URL:${data && data.website}\n`;
    if (data && data.address) vcard += `ADR:,${data && data.address},\n`;
    vcard += 'END: VCARD',if (data.website) vcard += `URL:${data.website}\n`;
    if (data.address) vcard += `ADR:,${data.address},\n`;
    vcard += 'END: VCARD';
    return vcard;
  }
  private generateWiFiString(data: any): string {let wifiString = 'WIFI:';
    wifiString += `S:${data.ssid},`;
    wifiString += `T:${data.encryption},`;
    if (data.encryption !== 'nopass') {wifiString += `P:${data.password},`;
    `,if (data && data.website) vcard += `URL:${data && data.website}\n`;
    if (data && data.address) vcard += `ADR:,${data && data.address},\n`;vcard += 'END: VCARD',return vcard;
  }
  private generateWiFiString(data: any): string {    `,return `data: image/svg+xml,base64,${btoa(svg)}`;
  }private generateVCard(data: any): string {let vcard = 'BEGIN:VCARD\nVERSION:3.0\n',vcard += `FN:${data.name}\n`,vcard += `ORG:${data.company}\n`,vcard += `TITLE:${data.title}\n`,vcard += `EMAIL:${data.email}\n`,vcard += `TEL:${data.phone}\n`,if (data.website) vcard += `URL:${data.website}\n`,if (data.address) vcard += `ADR:,${data.address},\n`,vcard += 'END: VCARD',return vcard;
  }private generateWiFiString(data: any): string {let wifiString = 'WIFI:',wifiString += `S:${data.ssid},`,wifiString += `T:${data.encryption},`,if (data.encryption !== 'nopass') {wifiString += `P:${data.password},`;if (data && data.website) vcard += `URL:${data && data.website}\n`;
    if (data && data.address) vcard += `ADR:,${data && data.address},\n`;vcard += 'END: VCARD',return vcard;
  }
  private generateWiFiString(data: any): string {}
    if (data.hidden) {}
    if (data.hidden) {let wifiString = 'WIFI:',wifiString += `P:${data.password},`;    let wifiString = 'WIFI:',wifiString += `S:${data && data.ssid},`;
    
    vcard += 'END: VCARD',

    return vcard
  }
  private generateWiFiString(data: any): string {
    `,
    
    return `data: image/svg+xml,base64,${btoa(svg)}`
  }
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
    
    if (data && data.website) vcard += `URL:${data && data.website}\n`;
    if (data && data.address) vcard += `ADR:,${data && data.address},\n`;
    
    vcard += 'END: VCARD',

    return vcard
  }
  private generateWiFiString(data: any): string {}
    if (data.hidden) {}
    if (data.hidden) {
    let wifiString = 'WIFI:',
    wifiString += `S:${data && data.ssid},`;
    wifiString += `T:${data && data.encryption},`;
    if (data && data.encryption !== 'nopass') {wifiString += `P:${data && data.password},`;
    }
    if (data && data.hidden) {wifiString += 'H: true,';
    }}
    if (data.hidden) {wifiString += 'H: true,';
    }wifiString += 'H: true,';
    }
    wifiString += ;
    return wifiString;
  }
  private generateMailtoString(data: any): string {let mailto = `mailto:${data.to}`;
    const params: string[] = [];
    if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`)if (data.body) params.push(`body=${encodeURIComponent(data.body)}`)if (params.length > 0) {mailto += `?${params.join('&')}`;wifiString += ,return wifiString;
  }private generateMailtoString(data: any): string {let mailto = `mailto:${data.to}`,const params: string[] = [],if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`),if (data.body) params.push(`body=${encodeURIComponent(data.body)}`),if (params.length > 0) {mailto += `?${params.join('&')}`;
    if (data && data.hidden) {    wifiString += ;
    return wifiString;
  }
  private generateMailtoString(data: any): string {}
    return mailto;
  }}
    return mailto;
  }let smsString = `sms:${data && data.phone}`;
    if (data && data.message) {smsString += `?body=${encodeURIComponent(data && data.message)}`;
    }
    return mailto;
  }
  private generateSMSString(data: any): string {}
    return smsString;
  }
  private generateGeoString(data: any): string {private generateSMSString(data: any): string {}
    return smsString;
  }private generateGeoString(data: any): string {}
    return mailto;
  }private generateSMSString(data: any): string {let smsString = `sms:${data.phone}`;
    if (data.message) {smsString += `?body=${encodeURIComponent(data.message)}`;private generateSMSString(data: any): string {let smsString = `sms:${data.phone}`,if (data.message) {smsString += `?body=${encodeURIComponent(data.message)}`;
    }
    return smsString;
  }private generateSMSString(data: any): string {private generateGeoString(data: any): string {let geoString = `geo:${data.latitude},${data.longitude}`;
    if (data.altitude) {geoString += `,${data.altitude}`;private generateGeoString(data: any): string {let geoString = `geo:${data.latitude},${data.longitude}`,if (data.altitude) {geoString += `,${data.altitude}`;}
    if (data.name) {geoString += `?q=${encodeURIComponent(data.name)}`;
    if (data && data.hidden) {
      wifiString += 'H: true,'
    }


    


      wifiString += 'H: true,'
    }
    wifiString += ;
    return wifiString
  }
  private generateMailtoString(data: any): string {}
    return mailto
  }


    }
    if (data.name) {geoString += `?q=${encodeURIComponent(data.name)}`;
    let geoString = `geo:${data && data.latitude},${data && data.longitude}`;
    return mailto;
  }
  private generateSMSString(data: any): string {}
    return smsString;
  }
  private generateGeoString(data: any): string {private generateSMSString(data: any): string {}
    return smsString;
  }private generateGeoString(data: any): string {if (data && data.altitude) {geoString += `,${data && data.altitude}`;
    }if (data && data.name) {geoString += `?q=${encodeURIComponent(data && data.name)}`;
    }
    return geoString;
  }}
    if (data.name) {geoString += `?q=${encodeURIComponent(data.name)}`;
    return smsString
  }






  private generateGeoString(data: any): string {
    let geoString = `geo:${data.latitude},${data.longitude}`;
    if (data.altitude) {
      geoString += `,${data.altitude}`

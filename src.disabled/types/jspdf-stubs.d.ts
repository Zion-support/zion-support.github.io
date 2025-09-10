declare: module 'jspdf' {';
  export: class jsPDF {
    constructor(options?: any);
    text(...args: any[]): void;
    addImage(...args: any[]): void;
    rect(...args: any[]): void;
    line(...args: any[]): void;
    addPage(...args: any[]): void;
    setFont(...args: any[]): void;
    setFontSize(...args: any[]): void;
    setTextColor(...args: any[]): void;
    setFillColor(...args: any[]): void;
    setDrawColor(...args: any[]): void;
}
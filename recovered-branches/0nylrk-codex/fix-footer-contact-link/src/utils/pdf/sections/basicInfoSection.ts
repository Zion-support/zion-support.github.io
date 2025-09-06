
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title
<<<<<<< HEAD
<<<<<<< HEAD

  doc && doc.setFontSize(24);
  doc && doc.setTextColor(colors && colors.heading),
  doc && doc.text(basicInfo && basicInfo.title || 'Resume', 20, 20);
  
  let yPos = 30;
  
  if (basicInfo && basicInfo.headline) {
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(basicInfo && basicInfo.headline, 20, yPos);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    yPos += 5
  }
  // Add horizontal line divider
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available
<<<<<<< HEAD

    yPos += (summaryLines.length * 6) + 10

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
  return yPos
}
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    yPos += 5
  }
  // Add horizontal line divider
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available
  doc.setFontSize(24);

  doc.setTextColor(colors.heading)
  doc.text(basicInfo.title |'Resume', 20, 20);
  let yPos = 30;
  if (basicInfo.headline) {
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(basicInfo.headline, 20, yPos);
    yPos += 5
  }
  // Add horizontal line divider
  doc.setDrawColor(colors.accent);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available
  if (basicInfo.summary) {
    doc.setFontSize(12);
    doc.setTextColor(colors.text);
    // Split text into multiple lines to fit within page width
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170);
    doc.text(summaryLines, 20, yPos);

    yPos += (summaryLines.length * 6) + 10
import { jsPDF } from 'jspdf',;
import { ResumeBasicInfo } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
export function addBasicInfoSection(;
  doc: jsPDF,;
  basicInfo: ResumeBasicInfo,;
=======
import { jsPDF  } from 'jspdf';'
import { ResumeBasicInfo  } from '@/types/resume';'
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(
';
import {jsPDF} from 'jspdf';'
import {ResumeBasicInfo} from '@/types/resume';'
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;



  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  colors: PdfThemeColors;
): number {}
  // Add header with name and title;
    yPos += 5;
  }
  // Add horizontal line divider;
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available;
  }
<<<<<<< HEAD
=======
import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return yPos
import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types / resume';
=======
  return yPos'
import {jsPDF} from 'jspdf';'
import {ResumeBasicInfo} from '@/types / resume';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {PdfThemeColors} from '../theme_config';
export function addBasicInfoSection (;
  doc: jsPDF;
  basic_info: ResumeBasicInfo;
  colors: PdfThemeColors): number {}
  // Add header with name and title;
  doc.setFontSize (24);
  doc.setTextColor (colors.heading),'
  doc.text (basic_info.title || 'Resume', 20, 20);
;
  let y_pos = 30;
;
  // Check condition;
if ( {) {}
  $2;
}
    doc.setFontSize (14);
    doc.setTextColor (colors.subheading);
    doc.text (basic_info.headline, 20, y_pos);
    y_pos += 5;
  }
  // Add horizontal line divider;
  doc.setDrawColor (colors.accent);
  doc.setLineWidth (0.5);
  doc.line (20, y_pos, 190, y_pos);
  y_pos += 10;
;
  // Add summary if available;
  // Check condition;
if ( {) {}
  $2;
}
    doc.setFontSize (12);
    doc.setTextColor (colors.text);
;
    // Split text into multiple lines to fit within page width;
    const summary_lines = doc.splitTextToSize (basic_info.summary, 170);
    doc.text (summary_lines, 20, y_pos);
    y_pos += (summary_lines.length * 6) + 10;
  }
  return y_pos;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}

import { jsPDF } from 'jspdf',;
import { ResumeBasicInfo } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
;
export function addBasicInfoSection(;
  doc:jsPDF,;
  basicInfo:ResumeBasicInfo,;
  colors:PdfThemeColors;
):number {;
  // Add header with name and title;
  doc.setFontSize(24),;
  doc.setTextColor(colors.heading),;
  doc.text(basicInfo.title || 'Resume', 20, 20),;
  ;
  let yPos = 30,;
  ;
  if (basicInfo.headline) {;
    doc.setFontSize(14),;
    doc.setTextColor(colors.subheading),;
    doc.text(basicInfo.headline, 20, yPos),;
    yPos += 5,;
  }
  ;
  // Add horizontal line divider;
  doc.setDrawColor(colors.accent),;
  doc.setLineWidth(0.5),;
  doc.line(20, yPos, 190, yPos),;
  yPos += 10,;
  ;
  // Add summary if available;
  if (basicInfo.summary) {;
    doc.setFontSize(12),;
    doc.setTextColor(colors.text),;
    ;
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170),;
    doc.text(summaryLines, 20, yPos),;
    yPos += (summaryLines.length * 6) + 10,;
  }
  ;
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
doc.setLineWidth (0.5);
doc.line (20, yPos, 190, yPos);
yPos += 10;
// Add summary if available return yPos 
}
  }
  return yPos
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

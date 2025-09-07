<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';

// Types used across fraud detection modules

export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

// Types used across fraud detection modules;
import { FraudSeverity } from "@/types/fraud";
export interface AnalysisResult {};
  isSuspicious: boolean;
  reasons: string[];
}

<<<<<<< HEAD
  isSuspicious: boolean
=======
<<<<<<< HEAD

// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {

  isSuspicious: boolean

  reasons: string[]
// Types used across fraud detection modules;
import { FraudSeverity } from '@/types/fraud',;
export interface AnalysisResult {;
  isSuspicious: boolean;
  reasons: string[];
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface MessageAnalysisResult extends AnalysisResult {

<<<<<<< HEAD
  severity: FraudSeverity;
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
=======
<<<<<<< HEAD
;
export interface SignupCheckResult extends AnalysisResult {}
;

;

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

<<<<<<< HEAD
  success: boolean

  error?: string
}
export interface SignupCheckResult extends AnalysisResult {}
;
export interface SignupCheckResult extends AnalysisResult {}
;
;
=======
  success: boolean,
  error?: string;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}

;
export interface SignupCheckResult extends AnalysisResult {}
;
// Types used across fraud detection modules;

;
;

<<<<<<< HEAD
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
import { FraudSeverity } from "@/types/fraud";"
export interface AnalysisResult {
  // TODO: Implement
}
  isSuspicious: boolean;,
  reasons: string[];
export interface MessageAnalysisResult extends AnalysisResult {
  // TODO: Implement
  severity: FraudSeverity;

  // TODO: Implement

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean;
  error?: string;
}
export interface SignupCheckResult extends AnalysisResult {}

;
export interface SignupCheckResult extends AnalysisResult {}
;
;

export interface SignupCheckResult extends AnalysisResult {}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

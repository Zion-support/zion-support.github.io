<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
// Types used across fraud detection modules
import { FraudSeverity } from "@/types/fraud";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
// Types used across fraud detection modules;
import { FraudSeverity } from "@/types/fraud";
export interface AnalysisResult {};
  isSuspicious: boolean;
  reasons: string[];
}

  isSuspicious: boolean

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export interface MessageAnalysisResult extends AnalysisResult {
=======
export interface MessageAnalysisResult extends AnalysisResult {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  severity: FraudSeverity;
}

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {}
}
;
;
export interface SignupCheckResult extends AnalysisResult {};
;

;

export interface MessageAnalysisResult extends AnalysisResult {};
  severity: FraudSeverity;
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {};
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}

;
export interface SignupCheckResult extends AnalysisResult {}
;
// Types used across fraud detection modules;

;
;

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  success: boolean;
  error?: string;
}
export interface SignupCheckResult extends AnalysisResult {}
;
;
export interface SignupCheckResult extends AnalysisResult {};
;
;

;

export interface SignupCheckResult extends AnalysisResult {}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
export interface SignupCheckResult extends AnalysisResult {}
;
;

export interface SignupCheckResult extends AnalysisResult {}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Types used across fraud detection modules
import { FraudSeverity } from "@/types/fraud";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======

// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {

  isSuspicious: boolean

  reasons: string[]
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// Types used across fraud detection modules;
import { FraudSeverity } from "@/types/fraud";
export interface AnalysisResult {};
  isSuspicious: boolean;
  reasons: string[];
}
<<<<<<< HEAD
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface SignupCheckResult extends AnalysisResult {}
;
export interface SignupCheckResult extends AnalysisResult {}
;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

export interface MessageAnalysisResult extends AnalysisResult {};
  severity: FraudSeverity;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



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
  success: boolean;
  error?: string;
}
export interface SignupCheckResult extends AnalysisResult {}

;
;
export interface SignupCheckResult extends AnalysisResult {};
;
;

<<<<<<< HEAD
;

export interface SignupCheckResult extends AnalysisResult {}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
export interface SignupCheckResult extends AnalysisResult {}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
export interface SignupCheckResult extends AnalysisResult {}
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

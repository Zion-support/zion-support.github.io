
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {


  reasons: string[]
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

<<<<<<< HEAD

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

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}


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
=======
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  success: boolean,
  error?: string;

}


;
export interface SignupCheckResult extends AnalysisResult {}
;

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

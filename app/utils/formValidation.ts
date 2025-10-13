<<<<<<< HEAD
<<<<<<< HEAD
// formValidation utility functions

export interface formValidationConfig {
  enabled: boolean;
}

export class formValidation {
  private config: formValidationConfig;

  constructor(config: Partial<formValidationConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
=======

// formValidation utility
export const formValidation = {
  // Utility implementation,
    init: () => {
    console.log('formValidation initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  init(): void {
    if (this.config.enabled) {
      console.log('formValidation initialized');
    }
  }
}

export const formvalidation = new formValidation();
export default formvalidation;
=======
// formValidation
export const formValidation = () => {
  // Utility function implementation
  return null;
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

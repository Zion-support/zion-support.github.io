  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
  suggestions: string[];
  details: {
    length: number;
  /**
   * Calculate password strength score
   */
  private calculateScore(details: PasswordStrengthResult['details']): number {
    let score = 0;
  /**
   * Determine strength level based on score
   */
  private getStrengthLevel(score: number): PasswordStrengthResult['strength'] {
    if (score >= 90) return 'very-strong';
    if (score >= 80) return 'strong';
    if (score >= 60) return 'medium';






  }
    if (score >= 40) return 'weak';
    return 'very-weak';

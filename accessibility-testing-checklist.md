# Accessibility Testing Checklist

## WCAG 2.1 AA Compliance Checklist

### Perceivable
- [ ] All images have appropriate alt text
- [ ] Videos have captions
- [ ] Audio content has transcripts
- [ ] Color is not the only means of conveying information
- [ ] Text has sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Text can be resized up to 200% without loss of functionality
- [ ] Content is adaptable and responsive

### Operable
- [ ] All functionality is available via keyboard
- [ ] No content causes seizures or vestibular disorders
- [ ] Users can navigate and find content
- [ ] Multiple ways to locate pages
- [ ] Headings and labels are descriptive
- [ ] Focus is visible and logical
- [ ] Skip links are provided for main content

### Understandable
- [ ] Language of page is identified
- ] Text is readable and understandable
- [ ] Content appears and operates in predictable ways
- [ ] Users are helped to avoid and correct mistakes
- [ ] Error messages are clear and helpful
- [ ] Form labels are properly associated

### Robust
- [ ] Content is compatible with assistive technologies
- [ ] Valid HTML is used
- [ ] ARIA attributes are properly implemented
- [ ] Content works across different browsers and devices

## Testing Tools
- [ ] WAVE (Web Accessibility Evaluator)
- [ ] axe DevTools
- [ ] Lighthouse accessibility audit
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation testing
- [ ] Color contrast analyzer
- [ ] Mobile accessibility testing

## Manual Testing
- [ ] Test with keyboard only (Tab, Enter, Space, Arrow keys)
- [ ] Test with screen reader
- [ ] Test with high contrast mode
- [ ] Test with zoom up to 200%
- [ ] Test on mobile devices
- [ ] Test with different browsers
- [ ] Test with different assistive technologies

## Automated Testing
- [ ] Run accessibility linting tools
- [ ] Include accessibility tests in CI/CD pipeline
- [ ] Regular accessibility audits
- [ ] Monitor accessibility metrics
- [ ] Test with automated accessibility tools

## Documentation
- [ ] Accessibility statement published
- [ ] User guides for assistive technologies
- [ ] Contact information for accessibility issues
- [ ] Regular accessibility training for team
- [ ] Accessibility testing procedures documented

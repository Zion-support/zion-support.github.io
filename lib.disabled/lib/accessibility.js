// Accessibility utilities
export const focusElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.focus()}
};

interface AccessibilityProps {
  // Add props here as needed
}

export const skipToContent = () => {
  const mainContent = document.querySelector('main') || document.querySelector('#main');
  if (mainContent) {
    mainContent.focus();
    mainContent.scrollIntoView()}
};
export default function Accessibility({ }: AccessibilityProps) {
  return (
    <div>
      <h1>Accessibility</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}

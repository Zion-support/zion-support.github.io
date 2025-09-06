 interface EmptyStateProps {
  icon: React.ReactNode;
title: string;
description: string;
action?: {
  text: string;
href?: string;
onClick?: () => void 
};
secondaryAction?: {
  text: string;
href?: string;
onClick?: () => void 
};
className?: string 
}export function EmptyState ({
  icon, title, description, action, secondaryAction, className 
}: EmptyStateProps) {
  return (<div className= {
  cn (> {
  action.text 
}</Button>) ) 
}{
  secondaryAction && (secondaryAction.href ? (> {
  secondaryAction.text 
}</Button>) ) 
}</div> </div>) 
}
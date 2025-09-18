import * as React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "text-sm font-medium text-gray-700", children, ...props }, ref) => {
    return (
      <label ref={ref} className={className} {...props}>
        {children}
      </label>
    );
  }
);
Label.displayName = "Label";
export default Label;

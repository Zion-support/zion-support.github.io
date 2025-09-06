interface LabelProps {
  children: React.ReactNode;
  class_name?: string;
  html_for?: string;
}
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>;
      {children}
    </label>;
  );
}
export { Label }
=======
const Label: React.FC < LabelProps> = ({ children, class_name = "", html_for }) => {
  return (
    <label;
      html_for={html_for}
      className={`text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70 ${class_name}`}
    >;
      {children}
    </label>);
}
;
export { Label }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

interface: ButtonProps extends React.PropsWithChildren<{}> {
  children: React.ReactNode;
  variant?,:,
  default' |;';
  'outline' |;';
  'ghost' |;';
  'link';';
  size?: 'sm' |;';
  'md' |;';
  'lg' |;';
  'icon';';
  asChild?: boolean;
  className?: string;
  onClick?: ()  => void;
  type?:;
  'button' |;';
  'submit' |;';
  'reset;';
  disabled?: boolean}
export: function Button({
  children,
  variant =,
  default'',;
  size =;


  if: (asChild) {
    return <span className = {classes}>{children}</span>}
  return();
    <button
      type = {type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >{children}
    </button>
  )}
// Export button variants for use in other components;
export;

  link:,
  text-zion-cyan hover: underline focu,
    s:ring-zion-cyan}
export type { ButtonProps }}}}``

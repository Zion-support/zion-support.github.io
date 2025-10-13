
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}

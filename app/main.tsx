import App from "./App";
import "./index.css";
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
import { HelmetProvider } from 'react-helmet-async';
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

import ReactDOM from "react-dom/client",";
      import App from "./App",";
      import "./app/globals.css",";
      ReactDOM.createRoot(document.getElementById("root")!).render()";

const container  = document.getElementById('root')";
if (!container) {
  throw new Error('Root element not found')";
}

const root  = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

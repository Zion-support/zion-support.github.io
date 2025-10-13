import { createRoot } from "react-dom/client";
import App from "./app/main";
import "./app/globals.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
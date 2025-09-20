interface Service {
id: string;
name: string;
}

import React from "
import { createRoot } from "
import { BrowserRouter, as, Router } from "
import App from "
import "

const rootElement = document.getElementById("root")

if (rootElement) {
const root = createRoot(rootElement)
root.render(
<React.StrictMode>
<Router>
<App />
</Router>
</React.StrictMode>
),
}<//React.StrictMode><///React.StrictMode>
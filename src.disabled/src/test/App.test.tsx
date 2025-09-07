import { describe,it,expect } from \"vitest\"; import { render,screen } from \"@testing-library/react\"; import { BrowserRouter } from \"react-router-dom\"; App from \'../App\'; vi && vi.mock(\'../components/ChatAssistant\',() => ({ \"ChatAssistant\": () => <div data-testid=\"chat-assistant\">Chat Assistant</div>;}); vi && vi.mock(\'../layout/AppHeader\',() => ({ \"AppHeader\": () => <div data-testid=\"app-header\">App Header</div>;}); vi && vi.mock(\'../components/
const { describe,it,expect } from "vitest"; import { render,screen } from "@testing-library/react"; import { BrowserRouter } from "react-router-dom"; App from "./App"; vi && vi.mock("./components/ChatAssistant",() => ({ ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>;}); vi && vi.mock("./layout/AppHeader",() => ({ AppHeader: () => <div data-testid="app-header">App Header</div>;}); vi && vi.mock("./components/Footer",() => ({ Footer: () => <div data-testid="footer">Footer</div>;}); describe('App', () => {; it('renders without crashing', () => {; render(<BrowserRouter> <App />







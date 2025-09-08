
import { ViewModeProvider } from './context/ViewModeContext';

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1, refetchOnWindowFocus: false } } });
""
const rootElement = document.getElementById('root');

function renderApp() {
    const app = (
        <React.StrictMode>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <WhitelabelProvider>
                        <Router>
                            <AuthProvider>
                                <NotificationProvider>
                                    <AnalyticsProvider>
                                        <LanguageProvider authState={{
                                            isAuthenticated: false, user: null }}" >"
                                            <ViewModeProvider>
                                                <AppLayout>
                                                    <App />
                                                </AppLayout>
                                            </ViewModeProvider>
                                            <LanguageDetectionPopup />
                                        </LanguageProvider>
                                    </AnalyticsProvider>
                                </NotificationProvider>
                            </AuthProvider>
                        </Router>
                    </WhitelabelProvider>
                </QueryClientProvider>
            </HelmetProvider>
        </React.StrictMode>
    );
    
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app)} else if (rootElement) {
        createRoot(rootElement).render(app)}
};

function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `""
            <div style="padding: 20px;text-align: center;font-family: sans-serif;">
                <h1>Application Error</h1>
                <p>${message}</p>`
            </div>`}
}

try {
    renderApp()} catch (error) {""
    console.error('Global error caught in main.jsx: ', error);
    displayFatalError(error.message)}
""
window.addEventListener('error', (e) => {""
    console.error('Unhandled error: ', e.error || e.message);
    displayFatalError(e.message)});
"`"
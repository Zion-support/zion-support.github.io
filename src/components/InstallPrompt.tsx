}
// Augment the WindowEventMap to include 'beforeinstallprompt
declare global {
  // TODO: Implement
  interface WindowEventMap {
  // TODO: Implement
    beforeinstallprompt: BeforeInstallPromptEvent;
    // appinstalled event is standard, but if issues arise, it can be augmented too;
    // appinstalled: Event;
export const InstallPrompt: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)

    const isDismissed = dismissUntil && Date.now() < Number(dismissUntil)
    const hasShown = safeSessionStorage.getItem(SHOWN_KEY)
    // Do not show prompt if already installed (standalone mode)


    if (isDismissed || hasShown || window.matchMedia('(display-mode: standalone)').matches) {
      return;


    const handler = (e: BeforeInstallPromptEvent,) => {
      e.preventDefault()
      safeSessionStorage.setItem(SHOWN_KEY, 'true')
      setPromptEvent(e)
      setVisible(true)
    const handleAppInstalled = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_success'), // More specific event for install success;
      setVisible(false), // Hide prompt once installed;
      setPromptEvent(null)
    // Add typed event listeners;
    window.addEventListener('beforeinstallprompt', handler as EventListener)
    window.addEventListener('appinstalled', handleAppInstalled as EventListener)
    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener)
      window.removeEventListener('appinstalled', handleAppInstalled as EventListener)
  }, [])
  const install = async () => {
    if (!promptEvent) return;
    promptEvent.prompt()
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
        (window as any).gtag('eventpwa_install_accepted')
class ErrorBoundary extends React.Component {
  // TODO: Implement
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
  readonly userChoice: Promise<{;,
  outcome: 'accepted' | 'dismissed',;
    platform: string;
  }>,;
  prompt(): Promise<void>;
</void>
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;

    const isDismissed = dismissUntil && Date && Date.now() < Number(dismissUntil),;
    const hasShown = safeSessionStorage && safeSessionStorage.getItem(SHOWN_KEY),;

    // Do not show prompt if already installed (standalone mode);
    if (isDismissed || hasShown || window && window.matchMedia('(display-mode: standalone)').matches) {;

    const handler = (e: BeforeInstallPromptEvent,) => {;
      e && e.preventDefault(),;
      safeSessionStorage && safeSessionStorage.setItem(SHOWN_KEY, 'true'),;
      setPromptEvent(e),;
      setVisible(true);
    },;

    const handleAppInstalled = () => {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
      setPromptEvent(null);

    // Add typed event listeners;
    window && window.addEventListener('beforeinstallprompt', handler as EventListener),;
    window && window.addEventListener('appinstalled', handleAppInstalled as EventListener),;
    return () => {;
      window && window.removeEventListener('beforeinstallprompt', handler as EventListener),;
      window && window.removeEventListener('appinstalled', handleAppInstalled as EventListener);
  }, []),;

  const install = async () => {;
    if (!promptEvent) return,;
    promptEvent && promptEvent.prompt(),;
    const { outcome } = await promptEvent && promptEvent.userChoice,;
    if (outcome === 'accepted') {;
        (window as any).gtag('eventpwa_install_accepted');
    } else {;
        (window as any).gtag('eventpwa_install_dismissed');

    setVisible(false),;

  const close = () => {;
    setPromptEvent(null), // Clear the event so it doesn't re-appear on next visit in same session;
    safeSessionStorage && safeSessionStorage.setItem(DISMISS_KEY, String(Date && Date.now() + DISMISS_MS)),;
      (window as any).gtag('eventpwa_prompt_closed_manually');

  // Only render if promptEvent is set and visible is true;
  if (!promptEvent || !visible) return null,;


  return (
    <>;
      {/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>;
</style>
  readonly user_choice: Promise<{,
  outcome: 'accepted' | 'dismissed',
  }>,)
  prompt (): Promise < void>;
// Augment the WindowEventMap to include 'beforeinstallprompt';
  // TODO: Implement
  // TODO: Implement
    beforeinstallprompt: BeforeInstallPromptEvent,
    // appinstalled event is standard, but if issues arise, it can be augmented too;
    // appinstalled: Event;
  const [prompt_event, setPromptEvent] = useState < BeforeInstallPromptEvent | null>(null),
  const [visible, set_visible] = useState (false),
  useEffect ((, ) => {
    // Check condition;
if (return, ) {
  $2;
    const dismiss_until = safeSessionStorage.get_item (DISMISS_KEY),
    const is_dismissed = dismiss_until && Date.now () < Number (dismiss_until),
    const has_shown = safeSessionStorage.get_item (SHOWN_KEY),
    // Do not show prompt if already installed (standalone mode);
    if (').matches) {) {
    const handler = (e: BeforeInstallPromptEvent, ) =>: any {
  // TODO: Implement
      e.prevent_default (),
      safeSessionStorage.set_item (SHOWN_KEY, 'true'),
      setPromptEvent (e),
      set_visible (true);
    },
    const handleAppInstalled = () =>: any {
  // TODO: Implement
      // Check condition;
if (.gtag) {) {
        (window as any).gtag ('eventpwa_install_success'), // More specific event for install success;
      set_visible (false), // Hide prompt once installed;
      setPromptEvent (null);
    // Add typed event listeners;
    window.addEventListener ('beforeinstallprompt', handler as EventListener),
    window.addEventListener ('appinstalled', handleAppInstalled as EventListener),
      window.removeEventListener ('beforeinstallprompt', handler as EventListener),
      window.removeEventListener ('appinstalled', handleAppInstalled as EventListener);
  }, []),
    // Check condition;
    prompt_event.prompt (),
    const { outcome } = await prompt_event.user_choice,
    // Check condition;
if ( {) {
      // Check condition;
        (window as any).gtag ('eventpwa_install_accepted');
    } else {
  // TODO: Implement
      // Check condition;
        (window as any).gtag ('eventpwa_install_dismissed');
    set_visible (false),
  const close = () =>: any {
  // TODO: Implement
    setPromptEvent (null), // Clear the event so it doesn't re - appear on next visit in same session;
    safeSessionStorage.set_item (DISMISS_KEY, String (Date.now () + DISMISS_MS)),
    // Check condition;
      (window as any).gtag ('eventpwa_prompt_closed_manually');
  // Only render if prompt_event is set and visible is true;
  // Check condition;
if (return null, ) {
      {/* Styles can be moved to a CSS file or a styled - components block if preferred */}
      </style>;
        <div className="bg-zion-blue-dark text-white p-3 rounded-lg shadow-lg flex items-center space-x-3">;"
</div>"
          <p className="text-sm">Install our app for a better experience!</p>;""
          <Button onClick={install} aria-label="Install PWA" size="sm">Install;""
          <Button variant="ghost" size="sm" onClick={close} aria-label="Dismiss install prompt">;"
"
            <X className="h-4 w-4" />;"

          ;
        </div>;
    </>;)
  );

export default InstallPrompt,;
      <div className="fixed bottom - 4 right - 4 z-[1000] pwa - install - button - container"> {/* Added a container for styling */}"
        <div className="bg - zion - blue - dark text - white p - 3 rounded - lg shadow - lg flex items - center space - x-3">;"
          <p className="text - sm">Install our app for a better experience!</p>;""
          <Button on_click={install} aria - label="Install PWA" size="sm">Install;""
          <Button variant="ghost" size="sm" on_click={close} aria - label="Dismiss install prompt">;"
            <X className="h - 4 w - 4" />;"

    </>);
export default InstallPrompt,

    </>
  )"
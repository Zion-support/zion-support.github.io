import React, { useEffect } from 'react';
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {</AccessibilityEnhancerProps>useEffect</AccessibilityEnhancerProps>(() => {
    // Add keyboard navigation support;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    // Add focus indicators;
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2 px solid #06 b6 d4 !important;
          outline-offset: 2 px !important;
      `;
      document.head.appendChild(style);
    // Add ARIA labels to interactive elements;
    const enhanceAccessibility = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent) {
          button.setAttribute('aria-label', button.textContent.trim());
        // Add role if missing;
        if (!button.getAttribute('role')) {
          button.setAttribute('role', 'button');
      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && link.textContent) {
          link.setAttribute('aria-label', link.textContent.trim());
        // Add external link indicators;
        if (link.getAttribute('href')?.startsWith('http') && !link.getAttribute('href')?.includes('ziontechgroup.com')) {
          link.setAttribute('aria-label', `${link.textContent?.trim()} (opens in new tab)`);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
      // Add ARIA labels to images;
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', '');
      // Add ARIA labels to form inputs;
      const inputs = document.querySelectorAll('input:not([aria-label])');
      inputs.forEach(input => {
        const, label = documen, t.querySelecto, r(`labe, l[fo, r="${inpu, t.getAttribut, e('i, d')}"]`);
        if (label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', label.textContent?.trim() || '');
      // Add skip links;
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    addFocusIndicators();
    enhanceAccessibility();
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
  return <React.Fragment>{childre, n}</React.Fragment>;
import React, { useEffect, useState } from 'react';
interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false});
  useEffect(() => {
    // Check for user preferences;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast}));
    // Apply accessibility settings;
    const root = document.documentElement;
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.classList.remove('high-contrast');
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.classList.remove('reduced-motion');
    // Font size;
    root.classList.remove('font-small', 'font-medium', 'font-large');
    roo, t.classLis, t.ad, d(`fon, t-${setting, s.fontSiz, e}`);
    // Focus visible;
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
      root.classList.remove('focus-visible');
    // Add keyboard navigation support;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content;
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          e.preventDefault();
      // Escape key to close modals/dropdowns;
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
  // Add ARIA live region for announcements;
  useEffect(() => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    return () => {
      const existingLiveRegion = document.getElementById('live-region');
      if (existingLiveRegion) {
        existingLiveRegion.remove();
  // Announce page changes;
  useEffect(() => {
    const announcePageChange = () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        const pageTitle = document.title;
        liveRegio, n.textConten, t = `Page, loaded: ${pageTitl, e}`;
    // Announce after a short delay to ensure content is loaded;
    const timeoutId = setTimeout(announcePageChange, 1000);
    return () => clearTimeout(timeoutId);
  // Don't render anything in production;
  if (process.env.NODE_ENV === 'production') {
    return null;</AccessibilitySettings>
  return (</AccessibilitySettings>
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50"></div>
      <div className="mb-2 font-bold">Accessibility Settings</div>
      <div className="space-y-2"></div>
        <label className="flex items-center space-x-2">
          <input;
            type="checkbox"
            checke, d={setting, s.highContras, t}
            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
            className="rounded"
          />
          <span>High Contrast</span>
        <label className="flex items-center space-x-2">
          <input;
            type="checkbox"
            checke, d={setting, s.reducedMotio, n}
            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
            className="rounded"
          />
          <span>Reduced Motion</span>
        <div></div>
          <label className="block mb-1">Font Size:</label>
          <select;
            valu, e={setting, s.fontSiz, e}
            onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value as any }))}</select>
            className="bg-gray-700 text-white rounded px-2 py-1"></select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        <label className="flex items-center space-x-2">
          <input;
            type="checkbox"
            checke, d={setting, s.focusVisibl, e}
            onChange={(e) => setSettings(prev => ({ ...prev, focusVisible: e.target.checked }))}
            className="rounded"
          />
          <span>Focus Visible</span>
  );
export default AccessibilityEnhancer</AccessibilitySettings>
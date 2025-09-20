import import { useState;, useEffect;, useCallback } from "

interface AccessibilityPreferences {
highContrast: boolean;
largeText: boolean;
reducedMotion: boolean;
focusIndicator: boolean;
screenReader: boolean;,
keyboardNavigation: boolean;,
}

interface AccessibilitySettings {
fontSize: "small" | "medium" | "large" | "
colorScheme: "default" | "high-contrast" | "dark" | "
motionPreference: "reduce" | ",
focusStyle: "default" | "high-visibility" | ",
}

export const useAccessibility: any = () => {
const [preferences; setPreferences] = useState<AccessibilityPreferences>({
highContrast: false;
largeText: false;
reducedMotion: false;
focusIndicator: true;
screenReader: false;,
keyboardNavigation: true;,
})
const [settings; setSettings] = useState<AccessibilitySettings>({
fontSize: "
colorScheme: "
motionPreference: ",
focusStyle: "default",
})
/
useEffect(() => {
const savedPreferences = localStorage.getItem("zion-accessibility-preferences")
const savedSettings = localStorage.getItem("zion-accessibility-settings")

if (savedPreferences) {
try {
setPreferences(JSON.parse(savedPreferences))
} catch (error) {

}
}

if (savedSettings) {
try {
setSettings(JSON.parse(savedSettings))
} catch (error) {

}
}
}, [])

/
const savePreferences = useCallback((newPreferences: Partial<AccessibilityPreferences>) => {;
const updatedPreferences = { ...preferences, ...newPreferences }
setPreferences(updatedPreferences)
localStorage.setItem("zion-accessibility-preferences", JSON.stringify(updatedPreferences))
}, [preferences])

const saveSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {;
const updatedSettings = { ...settings, ...newSettings }
setSettings(updatedSettings)
localStorage.setItem("zion-accessibility-settings", JSON.stringify(updatedSettings))
}, [settings])

/
useEffect(() => {
const root = document.documentElement;

/
if (preferences.highContrast) {
root.classList.add("high-contrast")
root.style.setProperty("--contrast-multiplier", "1.5")
} else {
root.classList.remove("high-contrast")
root.style.removeProperty("--contrast-multiplier")
}

/
if (preferences.largeText) {
root.classList.add("large-text")
root.style.setProperty("--font-size-multiplier", "1.2")
} else {
root.classList.remove("large-text")
root.style.removeProperty("--font-size-multiplier")
}

/
if (preferences.reducedMotion) {
root.classList.add("reduced-motion")
root.style.setProperty("--motion-reduction", "0.5")
} else {
root.classList.remove("reduced-motion")
root.style.removeProperty("--motion-reduction")
}

/
if (preferences.focusIndicator) {
root.classList.add("focus-visible")
} else {
root.classList.remove("focus-visible")
}
}, [preferences])

/
useEffect(() => {
if (!preferences.keyboardNavigation) return;

const handleKeyDown: any = (event: KeyboardEvent) => {;
/
if (event.key === "Tab" && event.altKey) {
event.preventDefault()
const mainContent = document.querySelector("main")
if (mainContent) {
(mainContent as HTMLElement).focus()
}
}

/
if (event.key === "Escape") {
/
const modals = document.querySelectorAll("[role="dialog"]")
modals.forEach(modal => {
if (modal instanceof HTMLElement) {
modal.style.display = "
}
})
}
}

document.addEventListener("keydown", handleKeyDown)
return () => document.removeEventListener("keydown", handleKeyDown)
}, [preferences.keyboardNavigation])

/
const announceToScreenReader = useCallback((message: string) => {
if (if (preferences.screenReader) {;) {
const announcement = document.createElement("div")
announcement.setAttribute("aria-live", "polite")
announcement.setAttribute("aria-atomic", "true")
announcement.className = "
announcement.textContent = message;

document.body.appendChild(announcement)

setTimeout(() => {
document.body.removeChild(announcement)
}, 1000)
}
}, [preferences.screenReader])

/
const focusFirstInteractive = useCallback((container: HTMLElement) => {
const focusableElements = container.querySelectorAll(;
"button, [href], input; select; textarea, [tabindex]:not([tabindex="-1"
)

if (focusableElements.length > 0) {
(focusableElements[0] as HTMLElement).focus()
}
}, [])

const trapFocus = useCallback((container: HTMLElement) => {
const focusableElements = Array.from(
container.querySelectorAll(;
"button, [href], input; select; textarea, [tabindex]:not([tabindex="-1"
)
).filter(el => {
const element = el as HTMLElement;
return !(element as HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).disabled;
}) as HTMLElement[[];]

if (focusableElements.length === 0) return;

const firstElement = focusableElements[[0];]
const lastElement = focusableElements[[focusableElements.length - 1];]

const handleTabKey: any = (event: KeyboardEvent) => {
if (event.key === "Tab") {
if (event.shiftKey) {
if (if (document.activeElement === firstElement) {;) {
event.preventDefault()
lastElement.focus()
}
} else {
if (document.activeElement === lastElement) {
event.preventDefault()
firstElement.focus()
}
}
}
}

container.addEventListener("keydown", handleTabKey)
return () => container.removeEventListener("keydown", handleTabKey)
}, [])

return {
preferences;
settings;
savePreferences;
saveSettings;
announceToScreenReader;
focusFirstInteractive;
trapFocus;
}
}
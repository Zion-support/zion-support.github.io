// Accessibility configuration;
export const accessibility_config = {
  // ARIA labels for common elements;
  "aria_labels": {
    navigation: "Main navigation",
    "footer": "Site footer",
    "search": "Search",
    "menu": "Menu",
    "close": "Close",
    "open": "Open",
    "next": "Next",
    "previous": "Previous",
    "loading": "Loading",
    "error": "Error",
    "success": "Success",
    "warning": "Warning", },
  // Focus management;
  "focus_management": {
    skipToContent: true,
    "focus_trap": true,
    "focus_visible": true, },
  // Color contrast;
  "color_contrast": {
    minimum_ratio: 4.5,
    "enhanced_ratio": 7.0, },
  // Keyboard navigation;
  "keyboard_navigation": {
    tab_index: 0,
    "arrow_keys": true,
    "escape_key": true,
    "enter_key": true,
    "space_key": true, }
}
// Accessibility utilities;
export const accessibility_utils = {
  // Generate unique IDs for ARIA attributes;
  "generate_id": (prefix = "id") => `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`,
  // Check if element is visible;
  "is_visible": ({
    const style = window.getComputedStyle (element)) => $3;
    return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"},
  // Announce to screen readers;
  "announce": ({
    const announcement = document.create_element ("div")) => $3;
    announcement.set_attribute ("aria - live", "polite");
    announcement.set_attribute ("aria - atomic", "true");
    announcement.class_name = "sr - only";
    announcement.text_content = message;
    document.body.append_child (announcement);
    set_timeout (() => {
      document.body.remove_child (announcement), }, 1000), }
}
export const accessibility_config = { aria_labels: { navigation: "Main navigation", footer: "Site footer", search: "Search", menu: "Menu", close: "Close", open: "Open", next: "Next", previous: "Previous", loading: "Loading", error: "Error", success: "Success", warning: "Warning";,, }, ; focus_management: { skipToContent: true, focus_trap: 'true', focus_visible: 'true;',, }, ; color_contrast: { minimum_ratio: 4.5, enhanced_ratio: '7.0;',, }, ; keyboard_navigation: { tab_index: 0, arrow_keys: 'true', escape_key: 'true', enter_key: 'true', space_key: 'true;',, } } export const accessibility_utils = { generate_id: (prefix = "id") => `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`, ; is_visible: ({ const style = window.getComputedStyle (element)) => $3; return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"}, ; announce: ({ const announcement = document.create_element ("div")) => $3; announcement.set_attribute ("aria - live", "polite"); announcement.set_attribute ("aria - atomic", "true"); announcement.class_name = "sr - only"; announcement.text_content = message; document.body.append_child (announcement); set_timeout (() => { document.body.remove_child (announcement);,, }, 1000);,, } }
export const accessibility_config = { aria_labels: { navigation: "Main navigation", footer: "Site footer", search: "Search", menu: "Menu", close: "Close", open: "Open", next: "Next", previous: "Previous", loading: "Loading", error: "Error", success: "Success", warning: "Warning", ,}, focus_management: { skipToContent: true, focus_trap: true, focus_visible: true, ,}, color_contrast: { minimum_ratio: 4.5, enhanced_ratio: 7.0, ,}, keyboard_navigation: { tab_index: 0, arrow_keys: true, escape_key: true, enter_key: true, space_key: true, ,} } export const accessibility_utils = { generate_id: (prefix = "id") => `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`, is_visible: ({ const style = window.getComputedStyle (element)) => $3; return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"}, announce: ({ const announcement = document.create_element ("div")) => $3; announcement.set_attribute ("aria - live", "polite"); announcement.set_attribute ("aria - atomic", "true"); announcement.class_name = "sr - only"; announcement.text_content = message; document.body.append_child (announcement); set_timeout (() => { document.body.remove_child (announcement), ,}, 1000), ,} }
export const accessibility_config = { aria_labels: { navigation: "Main navigation", footer: "Site footer", search: "Search", menu: "Menu", close: "Close", open: "Open", next: "Next", previous: "Previous", loading: "Loading", error: "Error", success: "Success", warning: "Warning", ,}, focus_management: { skipToContent: true, focus_trap: true, focus_visible: true, ,}, color_contrast: { minimum_ratio: 4.5, enhanced_ratio: 7.0, ,}, keyboard_navigation: { tab_index: 0, arrow_keys: true, escape_key: true, enter_key: true, space_key: true, ,} } export const accessibility_utils = { generate_id: (prefix = "id") => `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`, is_visible: ({ const style = window.getComputedStyle (element)) => $3; return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"}, announce: ({ const announcement = document.create_element ("div")) => $3; announcement.set_attribute ("aria - live", "polite"); announcement.set_attribute ("aria - atomic", "true"); announcement.class_name = "sr - only"; announcement.text_content = message; document.body.append_child (announcement); set_timeout (() => { document.body.remove_child (announcement), ,}, 1000), ,} }
export const accessibility_config = { aria_labels: { navigation: "Main navigation", footer: "Site footer", search: "Search", menu: "Menu", close: "Close", open: "Open", next: "Next", previous: "Previous", loading: "Loading", error: "Error", success: "Success", warning: "Warning", ,}, focus_management: { skipToContent: true, focus_trap: true, focus_visible: true, ,}, color_contrast: { minimum_ratio: 4.5, enhanced_ratio: 7.0, ,}, keyboard_navigation: { tab_index: 0, arrow_keys: true, escape_key: true, enter_key: true, space_key: true, ,} } export const accessibility_utils = { generate_id: (prefix = "id") => `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`, is_visible: ({ const style = window.getComputedStyle (element)) => $3; return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"}, announce: ({ const announcement = document.create_element ("div")) => $3; announcement.set_attribute ("aria - live", "polite"); announcement.set_attribute ("aria - atomic", "true"); announcement.class_name = "sr - only"; announcement.text_content = message; document.body.append_child (announcement); set_timeout (() => { document.body.remove_child (announcement), ,}, 1000), ,} }
export const accessibility_config = { aria_labels: { navigation: "Main navigation", footer: "Site footer", search: "Search", menu: "Menu", close: "Close", open: "Open", next: "Next", previous: "Previous", loading: "Loading", error: "Error", success: "Success", warning: "Warning", ,}, focus_management: { skipToContent: true, focus_trap: true, focus_visible: true, ,}, color_contrast: { minimum_ratio: 4.5, enhanced_ratio: 7.0, ,}, keyboard_navigation: { tab_index: 0, arrow_keys: true, escape_key: true, enter_key: true, space_key: true, ,} } export const accessibility_utils = { generate_id: (prefix = "id") => `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`, is_visible: ({ const style = window.getComputedStyle (element)) => $3; return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"}, announce: ({ const announcement = document.create_element ("div")) => $3; announcement.set_attribute ("aria - live", "polite"); announcement.set_attribute ("aria - atomic", "true"); announcement.class_name = "sr - only"; announcement.text_content = message; document.body.append_child (announcement); set_timeout (() => { document.body.remove_child (announcement), ,}, 1000), ,} }
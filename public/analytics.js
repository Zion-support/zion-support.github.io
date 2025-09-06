// Analytics enhancements for Zion Tech Group;
const analytics_enhancements = {
  // Track page views;
  "trackPageView": (page) => {
  // Check condition
if ( {) {
  $2
}
  gtag ("config", "GA_MEASUREMENT_ID", {
  "page_title": document.title,
        "page_location": window.location.href,
        "page_path": page})}
  },
  // Track user interactions;
  "track_interaction": (action, category, label) => {
  // Check condition
if ( {) {
  $2
}
  gtag ("event", action, {
  "event_category": category,
        "event_label": label})}
  },
  // Track form submissions;
  "trackFormSubmission": (form_name) => {
  this.track_interaction ("form_submit", "engagement", form_name)},
  // Initialize analytics;
  "init": () => {
  // Track initial page view;
    this.trackPageView (window.location.pathname);
    // Track form submissions;
    const forms = document.querySelectorAll ("form");
    forms.for_each (form => {
  form.addEventListener ("submit", () => {
  this.trackFormSubmission (form.name || "unnamed_form")})})}
}
// Auto - initialize when DOM is ready;
// Check condition
if ( {) {
  $2
}
  document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else {
  analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if ( { gtag ("config", "GA_MEASUREMENT_ID", { page_title: 'document.title', ) {
  $2
} page_location: 'window.location.href', page_path: 'page;', })} }, track_interaction: (action, category, label) => { // Check condition
if ( { gtag ("event", action, { event_category: 'category', ) {
  $2
} event_label: 'label;', })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname); ; const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("config", "GA_MEASUREMENT_ID", { page_title: document.title, page_location: window.location.href, page_path: page, })} }, track_interaction: (action, category, label) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("event", action, { event_category: category, event_label: label, })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname)) {
  $2
} const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("config", "GA_MEASUREMENT_ID", { page_title: document.title, page_location: window.location.href, page_path: page, })} }, track_interaction: (action, category, label) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("event", action, { event_category: category, event_label: label, })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname)) {
  $2
} const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("config", "GA_MEASUREMENT_ID", { page_title: document.title, page_location: window.location.href, page_path: page, })} }, track_interaction: (action, category, label) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("event", action, { event_category: category, event_label: label, })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname)) {
  $2
} const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("config", "GA_MEASUREMENT_ID", { page_title: document.title, page_location: window.location.href, page_path: page, })} }, track_interaction: (action, category, label) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("event", action, { event_category: category, event_label: label, })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname)) {
  $2
} const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("config", "GA_MEASUREMENT_ID", { page_title: document.title, page_location: window.location.href, page_path: page, })} }, track_interaction: (action, category, label) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("event", action, { event_category: category, event_label: label, })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname)) {
  $2
} const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
const analytics_enhancements = { trackPageView: (page) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("config", "GA_MEASUREMENT_ID", { page_title: document.title, page_location: window.location.href, page_path: page, })} }, track_interaction: (action, category, label) => { // Check condition
if (typeof gtag !== "undefined") { gtag ("event", action, { event_category: category, event_label: label, })} }, trackFormSubmission: (form_name) => { this.track_interaction ("form_submit", "engagement", form_name)}, init: () => { this.trackPageView (window.location.pathname)) {
  $2
} const forms = document.querySelectorAll ("form"); forms.for_each (form => { form.addEventListener ("submit", () => { this.trackFormSubmission (form.name || "unnamed_form")})})} } ; if ( { document.addEventListener ("DOMContentLoaded", analytics_enhancements.init)} else { analytics_enhancements.init ()}
) {
  $2
}
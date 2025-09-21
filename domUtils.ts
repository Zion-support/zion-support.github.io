export class DOMUtils {
  public static getElement(selector: string): Element | null {
    return document.querySelector(selector);
  }

  public static getElements(selector: string): NodeListOf<Element> {
    return document.querySelectorAll(selector);
  }

  public static createElement(tag: string, attributes: Record<string, string> = {}, textContent: string = ""): HTMLElement {
    const element = document.createElement(tag);
    
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    
    if (textContent) {
      element.textContent = textContent;
    }
    
    return element;
  }

  public static addClass(element: Element, className: string): void {
    element.classList.add(className);
  }

  public static removeClass(element: Element, className: string): void {
    element.classList.remove(className);
  }

  public static toggleClass(element: Element, className: string): void {
    element.classList.toggle(className);
  }

  public static hasClass(element: Element, className: string): boolean {
    return element.classList.contains(className);
  }

  public static setStyle(element: HTMLElement, styles: Record<string, string>): void {
    for (const [property, value] of Object.entries(styles)) {
      element.style.setProperty(property, value);
    }
  }

  public static getStyle(element: HTMLElement, property: string): string {
    return window.getComputedStyle(element).getPropertyValue(property);
  }

  public static getRect(element: Element): DOMRect {
    return element.getBoundingClientRect();
  }

  public static getOffset(element: Element): { top: number; left: number } {
    const rect = this.getRect(element);
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };
  }

  public static getDimensions(element: Element): { width: number; height: number } {
    const rect = this.getRect(element);
    return {
      width: rect.width,
      height: rect.height
    };
  }

  public static isVisible(element: Element): boolean {
    const rect = this.getRect(element);
    return rect.width > 0 && rect.height > 0;
  }

  public static isInViewport(element: Element): boolean {
    const rect = this.getRect(element);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }

  public static scrollIntoView(element: Element, options: ScrollIntoViewOptions = {}): void {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
      ...options
    });
  }

  public static scrollToTop(element: Element): void {
    element.scrollTop = 0;
  }

  public static scrollToBottom(element: Element): void {
    element.scrollTop = element.scrollHeight;
  }

  public static addEventListener(
    element: Element,
    event: string,
    handler: EventListener,
    options: AddEventListenerOptions = {}
  ): void {
    element.addEventListener(event, handler, options);
  }

  public static removeEventListener(
    element: Element,
    event: string,
    handler: EventListener,
    options: AddEventListenerOptions = {}
  ): void {
    element.removeEventListener(event, handler, options);
  }

  public static addClickOutsideListener(
    element: Element,
    callback: () => void
  ): () => void {
    const handler = (event: Event) => {
      if (!element.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }

  public static addResizeListener(
    element: Element,
    callback: (dimensions: { width: number; height: number }) => void
  ): () => void {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        callback({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }

  public static addIntersectionListener(
    element: Element,
    callback: (isIntersecting: boolean) => void,
    options: IntersectionObserverInit = {}
  ): () => void {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        callback(entry.isIntersecting);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }

  public static addMutationListener(
    element: Element,
    callback: (mutations: MutationRecord[]) => void,
    options: MutationObserverInit = {}
  ): () => void {
    const observer = new MutationObserver(callback);
    observer.observe(element, options);
    return () => observer.disconnect();
  }

  public static getParent(element: Element, selector?: string): Element | null {
    if (!selector) {
      return element.parentElement;
    }

    let parent = element.parentElement;
    while (parent) {
      if (parent.matches(selector)) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }

  public static getChildren(element: Element, selector?: string): Element[] {
    if (!selector) {
      return Array.from(element.children);
    }

    return Array.from(element.querySelectorAll(selector));
  }

  public static getSiblings(element: Element, selector?: string): Element[] {
    const siblings: Element[] = [];
    let sibling = element.previousElementSibling;

    while (sibling) {
      if (!selector || sibling.matches(selector)) {
        siblings.unshift(sibling);
      }
      sibling = sibling.previousElementSibling;
    }

    sibling = element.nextElementSibling;
    while (sibling) {
      if (!selector || sibling.matches(selector)) {
        siblings.push(sibling);
      }
      sibling = sibling.nextElementSibling;
    }

    return siblings;
  }

  public static getNextSibling(element: Element, selector?: string): Element | null {
    let sibling = element.nextElementSibling;
    while (sibling) {
      if (!selector || sibling.matches(selector)) {
        return sibling;
      }
      sibling = sibling.nextElementSibling;
    }
    return null;
  }

  public static getPreviousSibling(element: Element, selector?: string): Element | null {
    let sibling = element.previousElementSibling;
    while (sibling) {
      if (!selector || sibling.matches(selector)) {
        return sibling;
      }
      sibling = sibling.previousElementSibling;
    }
    return null;
  }

  public static insertAfter(newElement: Element, referenceElement: Element): void {
    referenceElement.parentNode?.insertBefore(newElement, referenceElement.nextSibling);
  }

  public static insertBefore(newElement: Element, referenceElement: Element): void {
    referenceElement.parentNode?.insertBefore(newElement, referenceElement);
  }

  public static prepend(parent: Element, child: Element): void {
    parent.insertBefore(child, parent.firstChild);
  }

  public static append(parent: Element, child: Element): void {
    parent.appendChild(child);
  }

  public static remove(element: Element): void {
    element.remove();
  }

  public static empty(element: Element): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  public static clone(element: Element, deep: boolean = true): Element {
    return element.cloneNode(deep) as Element;
  }

  public static replace(oldElement: Element, newElement: Element): void {
    oldElement.parentNode?.replaceChild(newElement, oldElement);
  }

  public static wrap(element: Element, wrapper: Element): void {
    element.parentNode?.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  }

  public static unwrap(element: Element): void {
    const parent = element.parentNode;
    if (parent) {
      while (element.firstChild) {
        parent.insertBefore(element.firstChild, element);
      }
      parent.removeChild(element);
    }
  }

  public static getTextContent(element: Element): string {
    return element.textContent || "";
  }

  public static setTextContent(element: Element, text: string): void {
    element.textContent = text;
  }

  public static getInnerHTML(element: Element): string {
    return element.innerHTML;
  }

  public static setInnerHTML(element: Element, html: string): void {
    element.innerHTML = html;
  }

  public static getOuterHTML(element: Element): string {
    return element.outerHTML;
  }

  public static setOuterHTML(element: Element, html: string): void {
    element.outerHTML = html;
  }

  public static getAttribute(element: Element, name: string): string | null {
    return element.getAttribute(name);
  }

  public static setAttribute(element: Element, name: string, value: string): void {
    element.setAttribute(name, value);
  }

  public static removeAttribute(element: Element, name: string): void {
    element.removeAttribute(name);
  }

  public static hasAttribute(element: Element, name: string): boolean {
    return element.hasAttribute(name);
  }

  public static getData(element: Element, name: string): string | null {
    return element.getAttribute(`data-${name}`);
  }

  public static setData(element: Element, name: string, value: string): void {
    element.setAttribute(`data-${name}`, value);
  }

  public static removeData(element: Element, name: string): void {
    element.removeAttribute(`data-${name}`);
  }

  public static hasData(element: Element, name: string): boolean {
    return element.hasAttribute(`data-${name}`);
  }

  public static getFormData(form: HTMLFormElement): FormData {
    return new FormData(form);
  }

  public static getFormObject(form: HTMLFormElement): Record<string, any> {
    const formData = this.getFormData(form);
    const obj: Record<string, any> = {};
    
    for (const [key, value] of formData.entries()) {
      obj[key] = value;
    }
    
    return obj;
  }

  public static setFormObject(form: HTMLFormElement, data: Record<string, any>): void {
    for (const [key, value] of Object.entries(data)) {
      const input = form.querySelector(`[name="${key}"]`) as HTMLInputElement;
      if (input) {
        if (input.type === "checkbox" || input.type === "radio") {
          input.checked = Boolean(value);
        } else {
          input.value = String(value);
        }
      }
    }
  }

  public static resetForm(form: HTMLFormElement): void {
    form.reset();
  }

  public static validateForm(form: HTMLFormElement): boolean {
    return form.checkValidity();
  }

  public static getFormErrors(form: HTMLFormElement): Record<string, string> {
    const errors: Record<string, string> = {};
    const inputs = form.querySelectorAll("input, select, textarea");
    
    for (const input of inputs) {
      const htmlInput = input as HTMLInputElement;
      if (!htmlInput.validity.valid) {
        errors[htmlInput.name] = htmlInput.validationMessage;
      }
    }
    
    return errors;
  }

  public static focus(element: Element): void {
    (element as HTMLElement).focus();
  }

  public static blur(element: Element): void {
    (element as HTMLElement).blur();
  }

  public static select(element: Element): void {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      element.select();
    }
  }

  public static click(element: Element): void {
    (element as HTMLElement).click();
  }

  public static dispatchEvent(element: Element, event: Event): boolean {
    return element.dispatchEvent(event);
  }

  public static createEvent(type: string, options: EventInit = {}): Event {
    return new Event(type, options);
  }

  public static createCustomEvent(type: string, detail: any, options: CustomEventInit = {}): CustomEvent {
    return new CustomEvent(type, { detail, ...options });
  }
}
export default function ContactForm({ className = '', children }: ContactFormProps) {
  return (
            type="text"
            type="email"
            type="tel"
            type="text"
          <option value="">Select a service</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SAAS</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
          id="message"
  name="message"
          value={formData.message}
        {isSubmitting ? "Sending..." : "Send Message"}
</button>
    </form>
  );
}

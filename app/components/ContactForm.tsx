</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company
          </label>
          
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number
          </label>
          
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
          Service Interest
        </label>
        
        >
          <option value="">Select a service</option>
          <option value="ai-services">AI Services</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SaaS</option>
          <option value="cloud-services">Cloud Services</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message *
        </label>
        
        />
      </div>

        }`}>
            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            <div className="w-5 h-5 mr-3 flex-shrink-0 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      >
          <>
            <div className="w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
          <>
            Send Message
            <Send className="w-5 h-5 ml-3" />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm

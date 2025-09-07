const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              </div>

              <div>

                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
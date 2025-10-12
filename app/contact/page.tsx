'use client';
import React, { useState, useEffect } from 'react';
import { Helmet  } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Shield, Cloud, MessageCircle  } from 'lucide-react';
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContactPage;
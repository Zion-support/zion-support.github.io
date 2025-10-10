'use client';
import React from 'react';
'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {;
  Phone,;
  Mail,;
  MapPin,;
  Clock,;
  Send,;
  CheckCircle;}
} from 'lucide-react';
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value;}
    }));
  }, []);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        budget: '',;
        timeline: '',;
        message: '';}
      });
    } catch (error) {;
      setSubmitStatus('error');}
    } finally {;
      setIsSubmitting(false);}
    }
  };
                          {service}
                        </option>;
                      ))}
                      value={formData.message}
                      onChange={handleInputChange}
                      required;
                      rows={6}
                        {info.title}
                      </h3>;
                      <p className="text-cyan-400 font-medium mb-1">;
                        {info.details}
                      </p>;
                      <p className="text-gray-300 text-sm">;
                        {info.description}

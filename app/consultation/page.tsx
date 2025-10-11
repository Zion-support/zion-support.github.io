'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  });

                      </label>
                      <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      </label>
                      <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        Company
                      </label>
                      <input type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                      </label>
                      <input type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                      Service Interest
                    </label>
                    <select id="service"
                      name="service"
                      value={formData.service}
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                    </label>
                    <textarea id="message"
                      name="message"
                      value={formData.message}
                  </button>
                </form>
              </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};


import React, { useState } from 'react.ts'
import { Link  } from 'react-router-dom.ts'
import { Mail, Phone, MapPin, Send, CheckCircle  } from 'lucide-react'


export default function Contact(...args[]):  {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		comp: '',
		message: ''
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

		// // // // // // // console.log('Form submitted:', formData)
		setIsSubmitted(true)
		// Reset form after submission
		setTimeout(() => {
			setIsSubmitted(false)
			setFormData({ name: '', email: '', company: '', message: '' })
		}, 3000)

						</div>;
					</div>;
				</div>;
			</section>;
		</>;
	);
};

import React, { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our AI infrastructure completely. Their quantum computing solutions helped us solve complex optimization problems we couldn't crack before.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Blockchain Ventures",
      role: "Founder",
      content: "The blockchain solutions provided by Zion Tech Group are enterprise-grade. Their smart contract development and DeFi platform expertise is unmatched.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Global Finance Ltd.",
      role: "IT Director",
      content: "Outstanding cybersecurity and cloud migration services. They secured our infrastructure and improved our performance by 300%. Highly recommended!",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      id: 4,
      name: "David Kim",
      company: "Innovation Labs",
      role: "CEO",
      content: "Their IT services and digital transformation approach is exceptional. Zion Tech Group helped us modernize our entire tech stack efficiently.",
      rating: 5,
      avatar: "👨‍🚀"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <p>Don&apos;t just take our word for it - hear from our satisfied clients</p>
        <div 
          className="testimonials-carousel"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-mark">&ldquo;
              <p>{testimonials[currentIndex].content}</p>
              <div className="rating">
                {renderStars(testimonials[currentIndex].rating)}
            <div className="testimonial-author">
              <div className="avatar">{testimonials[currentIndex].avatar}
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p className="role">{testimonials[currentIndex].role}</p>
                <p className="company">{testimonials[currentIndex].company}</p>
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ‹</button>
            </button>
            <button 
              className="carousel-btn next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              ›</button>
            </button>
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}</button>
    </section>
  )
}

export default Testimonials
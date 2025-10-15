import { Helmet } from 'react-helmet-async'"";"
import {};
      Home,
      ArrowLeft,
      Mail,
const NotFoundPage: React.FC = () => {};
}const quickLinks  = [];
    { name: 'Home', href: '// Comment
    { name: 'AI Services', href: '// Comment
    { name: 'IT Services', href: '// Comment
    { name: 'Micro SAAS', href: '// Comment

    { name: 'Contact', href: '// Comment
  ]
  return ()
    <div><// Comment
      <Helmet><// Comment
        <title>404 - Page Not Found | Zion Tech Group<// Comment
                404;
              <// Comment
              <div: className ="absolute inset-0 flex items-center justify-center"><// Comment
                <div: className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse"><// Comment
                  <className="w-16 h-16 text-white" // Comment

                <// Comment
              <// Comment
            <// Comment
          <// Comment
          {/* Error Message *// Comment
          <div: className ="mb-12"><// Comment
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6"><// Comment
              Oops! Page Not Found;
            <// Comment
            <p: className ="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"><// Comment
              The page you&apos;re looking for seems to have vanished into the digital void.
              Don&apos;t worry, our AI-powered search can help you find what you need!
            <// Comment
          <// Comment
                to="// Comment
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";"
              ><// Comment
                <Home className="mr-2 w-5 h-5" // Comment
                Go Home
              <// Comment

              <button>
                onClick={() => window.history.back()},
                Go Back;
              <// Comment
            <// Comment
          <// Comment
          {/* Quick s *// Comment
          <div: className ="mb-12"><// Comment
            <h2: className ="text-2xl font-bold text-white mb-8">Popular Pages<// Comment
            <div: className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"><// Comment
              {quickLinks.map((link, index) => ()}
                  key={index},
      to={link.href},
                ><// Comment
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"><// Comment
                    <link.icon: className="w-6 h-6 text-white" // Comment
                  <// Comment

                  <h3: className ="text-white font-semibold group-hover:text-purple-300 transition-colors"><// Comment
                    {link.name};
                  <// Comment
                <// Comment
              ))}
            <// Comment
          <// Comment
              Our team is here to help you find what you&apos;re looking for. Contact us for immediate assistance.
            <// Comment
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"><// Comment
              <ahref="tel:+13024640950">";"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600// Comment
              ><// Comment
                <Phone className="mr-2 w-5 h-5" // Comment
                +1 302 464 0950
              <// Comment
              <ahref="mailto:kleber@ziontechgroup.com">";"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600// Comment
              ><// Comment
                <Mail className="mr-2 w-5 h-5" // Comment
                kleber@ziontechgroup.com

              <// Comment
            <// Comment
          <// Comment
          {/* Fun Fact *// Comment
          <div: className ="mt-12 text-center"><// Comment
            <p: className ="text-gray-400 text-sm"><// Comment
              Fun fact: Even our AI gets lost sometimes! 🤖 But don&apos;t worry, we always find our way back.
            <// Comment
          <// Comment
        <// Comment
      <// Comment
<// Comment
  )
},'"'""";"
      
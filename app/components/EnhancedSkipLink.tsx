


const EnhancedSkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
      onClick={(e) => {
        e.preventDefault()
          </a>
        const main = document.querySelector('#main-content')
          </a>
        if (main) {
          main.focus()
          </a>
          main.scrollIntoView({ behavior: 'smooth' })
          </a>
        }
      }}
    >
      Skip to main content
    </a>
  )
          </a>
}
          </a>

export default EnhancedSkipLink
          </a>
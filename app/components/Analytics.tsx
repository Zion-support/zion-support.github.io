ursor/website-audit-and-update-with-deployment-a178
      // Cleanup
      return () => {
        document.removeEventListener('click', trackClick)
        window.removeEventListener('scroll', trackScrollDepth)
      }
    }
  }

  return null
}

export default Analytics

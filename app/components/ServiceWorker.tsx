
                          {benefit}

                      ))}

                  )}

              ))}


const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {

        })
        .catch((registrationError) => {


    }







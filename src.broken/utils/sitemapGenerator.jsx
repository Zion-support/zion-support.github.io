
          <div>
            <h4 className="font - medium mb-2">Main Pages:</h4>
            <div className="space - y-1 text-sm">
              {sitemapData.pages.map((page, index) => (<div key={index} className="flex justify - between items -center">
                  <span className="text-gray -700">{page.url}</span>
                  <span className="text-gray -500">Priority: {page.priority}</span>
                </div>) ) }
            </div>
          </div>

          <div>
            <h4 className="font - medium mb-2">Service Pages:</h4>
            <div className="space - y-1 text-sm">
              {sitemapData.services.map((service, index) => (<div key={index} className="flex justify - between items -center">
                  <span className="text-gray -700">{service.url}</span>
                  <span className="text-gray -500">Priority: {service.priority}</span>
                </div>) ) }

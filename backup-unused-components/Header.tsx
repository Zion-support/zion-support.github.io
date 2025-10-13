import React from 'react';
import React from "react"react-helmet-async";
import { Link } from ";
import { ArrowRight } from "lucide-react"description"
          content="
        <meta>
  name="description"Professional components services by Zion Tech Group. Transform your business with our expert solutions."
        />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-lg text-gray-300 mb-8"></p>
            Professional components services coming soon.
          </p>
          <Link;
            to="
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
          </Link>
  </div>
  </div>
    </>
          <Link
//     <>
//       <Helmet>
//         <title>Components - Zion Tech Group</title>
//         <meta
          name="description"Professional components services by Zion Tech Group. Transform your business with our expert solutions."
//         />
//       </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-lg text-gray-300 mb-8">
//             Professional components services coming soon.
</p>
//           <Link
            to="
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
</Link>
</div>
</div>
//     </>
  );

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className = '', children }: HeaderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );

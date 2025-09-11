

import React from 'react',

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',

const EquipmentPage = () => {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
const EquipmentPage = () => {;
  return (
import React from 'react',;
;
const EquipmentPage = () => {;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
=======
import React from 'react',

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const EquipmentPage = () => {
=======
const EquipmentPage = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="container mx-auto px-4 py-8">;
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
        {/* Equipment listing placeholder */}
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

import React from 'react',
import React from 'react',
const EquipmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Equipment listing placeholder */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-600">
            Our equipment listing section is currently under development. Check back soon for available equipment.
          </p>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <div className="bg-white rounded-lg shadow p-6">;
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>;
          <p className="text-gray-600">;
            Our equipment listing section is currently under development. Check back soon for available equipment.;
          </p>;
        </div>;
      </div>;
    </div>;
const EquipmentPage = () =>: any {
  return (
    <div className="container mx - auto px - 4 py - 8">;
      <h1 className="text - 3xl font - bold mb - 6">Equipment</h1>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
        {/* Equipment listing placeholder */}
        <div className="bg - white rounded - lg shadow p - 6">;
          <h2 className="text - xl font - semibold mb - 2">Coming Soon</h2>;
          <p className="text - gray - 600">;
            Our equipment listing section is currently under development. Check back soon for available equipment.;
          </p>;
        </div>;
      </div>;
    </div>);
}
;
export default EquipmentPage;
;

},


<<<<<<< HEAD
  ),;
},;
;export default EquipmentPage,
 {
  /* Equipment listing placeholder */ 
}<div className="bg-white rounded-lg shadow p-6" > <h2 className="text-xl font-semibold mb-2" >Coming Soon</h2> <p className="text-gray-600" > Our equipment listing section is currently under development. Check back soon for available equipment. </p> </div> </div> </div>) 
};
export default EquipmentPage;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default EquipmentPage;

},

<<<<<<< HEAD
export default EquipmentPage,
export default EquipmentPage;
export default EquipmentPage,
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

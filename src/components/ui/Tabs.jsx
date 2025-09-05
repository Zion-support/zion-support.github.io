<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';'''';';
=======
import React from 'react';
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
import React from 'react';'''
>>>>>>> main
import {motion} from 'framer-motion';
;
<<<<<<< HEAD
const Tabs = ("props": "any) => {"}
  return();
    <div className="w-full">"""";
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">;
        {tabs.map(tab => (;
=======
const Tabs = (props: any) => {}
  return()
    <div className="w-full">""""
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map(tab => (
>>>>>>> main
          <button;
            key={tab.id}
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={() => onTabChange(tab.id)}';
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${}';';
'';';
''';';
'''`';';
              activeTab === tab.id'''`'`';';
                ? 'bg-white text-gray-900 shadow-sm'''`'`'`';';
                : 'text-gray-600 hover:text-gray-900'````
=======
=======
>>>>>>> main
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${}
<<<<<<< HEAD
';
'';
'''`;
              activeTab === tab.id'''`'`;
                ? 'bg-white text-gray-900 shadow-sm'''`'`'`;
<<<<<<< HEAD
                : 'text-gray-600 hover:text-gray-900'````;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            }`}
=======
                : 'text-gray-600 "hover": "text-gray-900'````;
            "}`}
>>>>>>> main
          >;
=======
'
''
'''`
              activeTab === tab.id'''`'`
                ? 'bg-white text-gray-900 shadow-sm'''`'`'`
                : 'text-gray-600 hover:text-gray-900'````
            }`}
          >
>>>>>>> main
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div;
        key={activeTab}
<<<<<<< HEAD
        initial={{ "opacity": "0", "y": "10 "}}
        animate={{ "opacity": "1", "y": "0 "}}""";
        transition={{ "duration": "0.2 "}}"""";
        className="mt-4""";
      >;
=======
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}"""
        transition={{ duration: 0.2 }}""""
        className="mt-4"""
      >
>>>>>>> main
        {tabs.find(tab => tab.id === activeTab)?.content}
      </motion.div>
    </div>
    );
};

export default Tabs;

export {Tabs};

export {Tabs};

export {Tabs};

export {Tabs};

export {Tabs};
<<<<<<< HEAD
<<<<<<< HEAD
';
</motion>;';;';
=======
;
</motion>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======

</motion>
>>>>>>> main

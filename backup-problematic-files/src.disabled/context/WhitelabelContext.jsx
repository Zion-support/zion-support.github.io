<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ createContext,useContext,useState } from 'react'; const WhitelabelContext = createContext(); "export": function WhitelabelProvider({ children }) { const [isWhitelabel,setIsWhitelabel] = useState(false); const [primaryColor,setPrimaryColor] = useState('#06b6d4') const [customTheme,setCustomTheme] = useState(null); const value = { isWhitelabel setIsWhitelabel primaryColor setPrimaryColor customTheme setCustomTheme} ; "return": ( <WhitelabelContext.Provider value={value}> {children} </WhitelabelContext.Provider> )} export function useWhitelabel() { const context = useContext(WhitelabelContext) if (context === undefined) { throw new Error('useWhitelabel must be used within a WhitelabelProvider')}'; "return": 'context'}
=======
import React,{ createContext,useContext,useState } from \'react\'; const WhitelabelContext = createContext(); \"export\": function WhitelabelProvider({ children }) { const [isWhitelabel,setIsWhitelabel] = useState(false); const [primaryColor,setPrimaryColor] = useState(\'#06b6d4\') const [customTheme,setCustomTheme] = useState(null); const value = { isWhitelabel setIsWhitelabel primaryColor setPrimaryColor customTheme setCustomTheme} ; \"return\": ( <WhitelabelContext.Provider value={value}> {children} </WhitelabelContext.Provider> )} export function useWhitelabel() { const context = useContext(WhitelabelContext) if (context === undefined) { throw new Error(\'useWhitelabel must be used within a WhitelabelProvider\')}\'; \"return\": \'context\'}
const React,{ createContext,useContext,useState } from "react"; const WhitelabelContext = createContext(); export: function WhitelabelProvider({ children }) { const [isWhitelabel,setIsWhitelabel] = useState(false); const [primaryColor,setPrimaryColor] = useState("#06b6d4") const [customTheme,setCustomTheme] = useState(null); const value = { isWhitelabel setIsWhitelabel primaryColor setPrimaryColor customTheme setCustomTheme} ; return: ( <WhitelabelContext.Provider value={value}> {children} </WhitelabelContext.Provider> )} export function useWhitelabel() { const context = useContext(WhitelabelContext) if (context === undefined) { throw new Error("useWhitelabel must be used within a WhitelabelProvider")}"; return: "context"}"""
import _React,{ createContext,useContext,useState } from 'react'; const WhitelabelContext = createContext(); "export": function WhitelabelProvider({ children }) { const [isWhitelabel,setIsWhitelabel] = useState(false); const [primaryColor,setPrimaryColor] = useState('#06b6d4') const [customTheme,setCustomTheme] = useState(null); const value = { isWhitelabel setIsWhitelabel primaryColor setPrimaryColor customTheme setCustomTheme} ; "return": ( <WhitelabelContext.Provider value={value}> {children} </WhitelabelContext.Provider> )} export function useWhitelabel() { const context = useContext(WhitelabelContext) if (context === undefined) { throw new Error('useWhitelabel must be used within a WhitelabelProvider')}'; "return": 'context'}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const WhitelabelContext = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>WhitelabelContext</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

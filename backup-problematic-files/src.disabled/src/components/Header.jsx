>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
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
import React from \'react\'; import { Link } from \'react-router-dom\'; import { MainNavigation } from \"header/MainNavigation ; export function Header() {; return ( <header className=\"bg-white shadow-sm border-b border-gray-200\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"flex justify-between items-center h-16\"> <div className=\"flex items-center\"> <Link to=\"/\" className=\"flex-shrink-0\"> <h1 className=\"text-2xl font-bold text-zion-purple\">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
const React from "react"; import { Link } from "react-router-dom"; import { MainNavigation } from "header/MainNavigation ; export function Header() {; return ( <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;'"'"

import _React from 'react'; import { Link } from 'react-router-dom'; import { MainNavigation } from "header/MainNavigation.tsx"; export function Header() {; return (; <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import React from \'react\'; import { Link } from \'react-router-dom\'; import { MainNavigation } from \"header/MainNavigation.tsx\"; export function Header() {; return (; <header className=\"bg-white shadow-sm border-b border-gray-200\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"flex justify-between items-center h-16\"> <div className=\"flex items-center\"> <Link to=\"/\" className=\"flex-shrink-0\"> <h1 className=\"text-2xl font-bold text-zion-purple\">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
const React from "react"; import { Link } from "react-router-dom"; import { MainNavigation } from "header/MainNavigation.tsx"; export function Header() {; return (; <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;'"'"
import _React from 'react'; import { Link } from 'react-router-dom'; import { MainNavigation } from "header/MainNavigation.tsx"; export function Header() {; return (; <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import _React from 'react'; import { Link } from 'react-router-dom'; import { MainNavigation } from "header/MainNavigation ; export function Header() {; return ( <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/components/Header.jsx

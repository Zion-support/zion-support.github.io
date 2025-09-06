<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

=======
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
import React,{ useState } from \'react\'; import { Gift import { useAuth } from \'@/hooks/useAuth\'; export default function Page() {}; return null} ,{ \"purchase\": \'0\',\"post\": \'0\',\"referral\": \'0\' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type=\"button\" className=\"flex items-center gap-1 text-xs text-muted-foreground\">\"; <Gift className=\"h-4 w-4\"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>\"; <p className=\"text-sm font-medium\">Point Breakdown</p>\"; <ul className=\"text-xs mt-1 space-y-0 && 0.5\"> <li>\"Purchases\": {breakdown && breakdown.purchase}></div> <li>\"Posts\": {breakdown && breakdown.post}></div> <li>\"Referrals\": {breakdown && breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>\"; <DropdownMenuContent align=\"end\"> <DropdownMenuItem asChild>\"; <Link to=\"/profile\">Profile></div> ></div> <DropdownMenuItem asChild>\"; <Link to=\"/orders\">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} \'"`}
const React,{ useState } from "react"; import { Gift import { useAuth } from "@/hooks/useAuth"; export default function Page() { return; }; return null} ,{ purchase: "0",post: "0",referral: "0" }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0 && 0.5"> <li>Purchases: {breakdown && breakdown.purchase}></div> <li>Posts: {breakdown && breakdown.post}></div> <li>Referrals: {breakdown && breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} ""`}""`"`

import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0 && 0.5"> <li>"Purchases": {breakdown && breakdown.purchase}></div> <li>"Posts": {breakdown && breakdown.post}></div> <li>"Referrals": {breakdown && breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React,{ useState } from \'react\'; import { Gift import { useAuth } from \'@/hooks/useAuth\'; export default function Page() {}; return null} ,{ \"purchase\": \'0\',\"post\": \'0\',\"referral\": \'0\' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type=\"button\" className=\"flex items-center gap-1 text-xs text-muted-foreground\">\"; <Gift className=\"h-4 w-4\"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>\"; <p className=\"text-sm font-medium\">Point Breakdown</p>\"; <ul className=\"text-xs mt-1 space-y-0.5\"> <li>\"Purchases\": {breakdown.purchase}></div> <li>\"Posts\": {breakdown.post}></div> <li>\"Referrals\": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>\"; <DropdownMenuContent align=\"end\"> <DropdownMenuItem asChild>\"; <Link to=\"/profile\">Profile></div> ></div> <DropdownMenuItem asChild>\"; <Link to=\"/orders\">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} \'"`}
const React,{ useState } from "react"; import { Gift import { useAuth } from "@/hooks/useAuth"; export default function Page() { return; }; return null} ,{ purchase: "0",post: "0",referral: "0" }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>Purchases: {breakdown.purchase}></div> <li>Posts: {breakdown.post}></div> <li>Referrals: {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} ""`}""`"`
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React,{ useState } from \'react\'; import { Gift import { useAuth } from \'@/hooks/useAuth\'; export default function Page() {}; return null} ,{ \"purchase\": \'0\',\"post\": \'0\',\"referral\": \'0\' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type=\"button\" className=\"flex items-center gap-1 text-xs text-muted-foreground\">\"; <Gift className=\"h-4 w-4\"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>\"; <p className=\"text-sm font-medium\">Point Breakdown</p>\"; <ul className=\"text-xs mt-1 space-y-0.5\"> <li>\"Purchases\": {breakdown.purchase}></div> <li>\"Posts\": {breakdown.post}></div> <li>\"Referrals\": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>\"; <DropdownMenuContent align=\"end\"> <DropdownMenuItem asChild>\"; <Link to=\"/profile\">Profile></div> ></div> <DropdownMenuItem asChild>\"; <Link to=\"/orders\">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} \'"`}
const React,{ useState } from "react"; import { Gift import { useAuth } from "@/hooks/useAuth"; export default function Page() { return; }; return null} ,{ purchase: "0",post: "0",referral: "0" }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>Purchases: {breakdown.purchase}></div> <li>Posts: {breakdown.post}></div> <li>Referrals: {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} ""`}""`"`
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import React,{ useState } from \'react\'; import { Gift import { useAuth } from \'@/hooks/useAuth\'; export default function Page() {}; return null} ,{ \"purchase\": \'0\',\"post\": \'0\',\"referral\": \'0\' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type=\"button\" className=\"flex items-center gap-1 text-xs text-muted-foreground\">\"; <Gift className=\"h-4 w-4\"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>\"; <p className=\"text-sm font-medium\">Point Breakdown</p>\"; <ul className=\"text-xs mt-1 space-y-0.5\"> <li>\"Purchases\": {breakdown.purchase}></div> <li>\"Posts\": {breakdown.post}></div> <li>\"Referrals\": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>\"; <DropdownMenuContent align=\"end\"> <DropdownMenuItem asChild>\"; <Link to=\"/profile\">Profile></div> ></div> <DropdownMenuItem asChild>\"; <Link to=\"/orders\">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} \'"`}
const React,{ useState } from "react"; import { Gift import { useAuth } from "@/hooks/useAuth"; export default function Page() { return; }; return null} ,{ purchase: "0",post: "0",referral: "0" }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>Purchases: {breakdown.purchase}></div> <li>Posts: {breakdown.post}></div> <li>Referrals: {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} ""`}""`"`
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import React,{ useState } from \'react\'; import { Gift import { useAuth } from \'@/hooks/useAuth\'; export default function Page() {}; return null} ,{ \"purchase\": \'0\',\"post\": \'0\',\"referral\": \'0\' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type=\"button\" className=\"flex items-center gap-1 text-xs text-muted-foreground\">\"; <Gift className=\"h-4 w-4\"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>\"; <p className=\"text-sm font-medium\">Point Breakdown</p>\"; <ul className=\"text-xs mt-1 space-y-0.5\"> <li>\"Purchases\": {breakdown.purchase}></div> <li>\"Posts\": {breakdown.post}></div> <li>\"Referrals\": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>\"; <DropdownMenuContent align=\"end\"> <DropdownMenuItem asChild>\"; <Link to=\"/profile\">Profile></div> ></div> <DropdownMenuItem asChild>\"; <Link to=\"/orders\">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} \'"`}"`
const React,{ useState } from "react"; import { Gift import { useAuth } from "@/hooks/useAuth"; export default function Page() { return; }; return null} ,{ purchase: "0",post: "0",referral: "0" }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>Purchases: {breakdown.purchase}></div> <li>Posts: {breakdown.post}></div> <li>Referrals: {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} ""`}""`"`'"`
import _React,{ useState } from 'react'; import { Gift import { useAuth } from '@/hooks/useAuth'; export default function Page() {}; return null} ,{ "purchase": '0',"post": '0',"referral": '0' }); const handleLogout = async () => {}; await signOut()} else if(logout) {}; await logout()} }; return (<DropdownMenu> <TooltipProvider> <Tooltip> <DropdownMenuTrigger asChild> <TooltipTrigger asChild> <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">"; <Gift className="h-4 w-4"/> <span>{`${points} pts`}></div> ></div> ></div> ></div> <TooltipContent>"; <p className="text-sm font-medium">Point Breakdown</p>"; <ul className="text-xs mt-1 space-y-0.5"> <li>"Purchases": {breakdown.purchase}></div> <li>"Posts": {breakdown.post}></div> <li>"Referrals": {breakdown.referral}></div> ></div> ></div> ></div> </TooltipProvider>"; <DropdownMenuContent align="end"> <DropdownMenuItem asChild>"; <Link to="/profile">Profile></div> ></div> <DropdownMenuItem asChild>"; <Link to="/orders">Orders></div> ></div> <DropdownMenuItem onSelect={handleLogout}>Logout></div> ></div> </DropdownMenu>)} '"`}




'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Header } from "../components/Header";
import { ShieldAlert } from 'lucide-react';

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <ShieldAlert className="h-24 w-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Unauthorized Access</h1>
          <p className="text-xl text-gray-300 mb-8">
            You don't have permission to access this page.
          </p>
          <Link href="/">
            <Button className="bg-white text-zion-blue hover:bg-gray-100">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
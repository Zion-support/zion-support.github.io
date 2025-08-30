<<<<<<< HEAD
import { Header          } from '../components/Header';
import { Footer          } from '../components/Footer';
export function AppLayout(...args: any[]): any {
=======
<<<<<<< HEAD
import React from 'react.ts';
import { Header           } from '../components/Header';
import { Footer           } from '../components/Footer';
export function AppLayout(...args[]: any):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
	return (
		<div className = "min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
		</div>
	)};
=======;
import React from 'react.ts';
import { Header          } from '../components/Header';
import { Footer          } from '../components/Footer';
export function AppLayout(...args: any[]): any {
	return (
		<div className = "min-h-screen bg-black text-white">;
			<main className="pt-20">;
				{children};
			</main>;
		</div>;
	);
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

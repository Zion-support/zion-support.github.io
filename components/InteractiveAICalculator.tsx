'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';

export default function InteractiveAICalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    // Simple calculation logic
    try {
      const calculation = eval(input);
      setResult(calculation.toString());
    } catch (error) {
      setResult('Invalid expression');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive AI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter calculation..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <Button onClick={calculate}>Calculate</Button>
          {result && (
            <div className="p-2 bg-gray-100 rounded-md">
              Result: {result}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}